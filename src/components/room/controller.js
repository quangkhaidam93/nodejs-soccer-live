const Room = require("../../models/room.model");
const { roleTypes } = require("../../models/role.model");
const {
  generateResponse,
  generateResponseForArray,
} = require("../../utils/response");
const statusType = require("../../constants/statusType");
const roomService = require("./service");
const { validateRoomObject, validateRoomId } = require("./validation");
const { formatRoomRes } = require("./formatData");
const { isEmptyArray } = require('../../utils/array');

const getRooms = async (req, res) => {
  const offset = req.body.offset || 0;
  const limit = req.body.limit || roomService.LIMIT;

  let rooms = await roomService.findRooms(offset);

  if (rooms || isEmptyArray(rooms)) {
    const hasMore = rooms.length <= roomService.LIMIT;

    rooms = rooms.map((r) => formatRoomRes(r));

    res.send(
      generateResponseForArray({
        type: statusType.SUCCESS,
        message: "Thành công",
        arrayData: rooms,
        hasMore,
        offset: offset + rooms.length,
      })
    );

    return;
  }


  res.send(
    generateResponse({
      type: statusType.INTERNAL_SERVER_ERROR,
      message: "Failed",
    })
  );
};

const getRoomInfo = async (req, res) => {
  const roomId = validateRoomId(req, res);

  let room = await roomService.findRoomById(roomId);

  if (!room) {
    res.send(
      generateResponse({
        type: statusType.NOT_FOUND,
        message: "Không tìm thấy room này",
      })
    );
    return;
  }

  room = formatRoomRes(room);

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: room,
      message: "Thành công",
    })
  );
};

const createNewRoom = async (req, res) => {
  const newRoom = validateRoomObject(req, res);

  const createdRoom = await roomService.createNewRoom(newRoom);

  if (!createdRoom) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Không thể tạo room",
      })
    );
    return;
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: createdRoom,
      message: "Thành công",
    })
  );
};

const editRoomInfo = async (req, res) => {
  const roomId = validateRoomId(req, res);
  const needUpdateRoom = validateRoomObject(req, res);

  const updatedRoom = await roomService.editRoom(roomId, needUpdateRoom);

  if (!updatedRoom) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Cập nhật thông tin không thành công",
      })
    );
    return;
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: updatedRoom,
      message: "Thành công",
    })
  );
};

const deleteRoom = async (req, res) => {
  const roomId = validateRoomId(req, res);

  const deletedRoom = await roomService.deleteRoom(roomId);

  if (!deletedRoom) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Xoá caster không thành công",
      })
    );
    return;
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: deletedRoom,
      message: "Thành công",
    })
  );
};

module.exports = {
  getRooms,
  getRoomInfo,
  createNewRoom,
  editRoomInfo,
  deleteRoom,
};
