const Caster = require("../../models/caster.model");
const { roleTypes } = require("../../models/role.model");
const {
  generateResponse,
  generateResponseForArray,
} = require("../../utils/response");
const statusType = require("../../constants/statusType");
const { validateCasterId, validateCasterObject } = require("./validation");
const casterService = require("./service");

const getAllCasters = async (req, res) => {
  const casters = await casterService.findAllCasters();
  res.send(
    generateResponseForArray({
      type: statusType.SUCCESS,
      arrayData: casters,
      message: "Thành công",
    })
  );
};

const getCasterInfo = async (req, res) => {
  const casterId = validateCasterId(req, res);

  const caster = await casterService.findCasterById(casterId);

  if (!caster) {
    res.send(
      generateResponse({
        type: statusType.NOT_FOUND,
        message: "Không tìm thấy caster này",
      })
    );
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: caster,
      message: "Thành công",
    })
  );
};

const createNewCaster = async (req, res) => {
  const newCaster = validateCasterObject(req, res);

  const createdCaster = await casterService.createCaster(newCaster);

  if (!createdCaster) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Không thể tạo caster",
      })
    );
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: createdCaster,
      message: "Thành công",
    })
  );
};

const editCasterInfo = async (req, res) => {
  const casterId = validateCasterId(req, res);
  const needUpdateCaster = validateCasterObject(req, res);

  const updatedCaster = await casterService.editCaster(
    casterId,
    needUpdateCaster
  );


  if (!updatedCaster) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Cập nhật thông tin không thành công",
      })
    );
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: updatedCaster,
      message: "Thành công",
    })
  );
};

const deleteCaster = async (req, res) => {
  const casterId = validateCasterId(req, res);

  const deletedCaster = await casterService.deleteCaster(casterId);

  if (!deletedCaster) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Xoá caster không thành công",
      })
    );
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      data: deletedCaster,
      message: "Thành công",
    })
  );
};

module.exports = {
  getAllCasters,
  getCasterInfo,
  createNewCaster,
  editCasterInfo,
  deleteCaster,
};
