const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const validateRoomId = (req, res) => {
  const roomId = req.params.id;

  if (!roomId) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Không có room id",
      })
    );
  }

  return roomId;
};

const validateRoomObject = (req, res) => {
  const room = req.body.data;

  if (!room) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Body rỗng",
      })
    );
  }

  delete room.id;

  return room;
};

module.exports = {
  validateRoomId,
  validateRoomObject,
};
