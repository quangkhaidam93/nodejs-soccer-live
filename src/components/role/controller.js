const Role = require("../../models/role.model");
const { roleTypes } = require("../../models/role.model");
const {
  generateResponse,
  generateResponseForArray,
} = require("../../utils/response");
const statusType = require("../../constants/statusType");
const roleService = require("./service");

const getAllRoles = async (req, res) => {
  const roles = await roleService.findAllRoles();
  if (!roles) {
    res.send(
      generateResponse({
        type: statusType.NOT_FOUND,
        message: "Lỗi ở server",
      })
    );
    return;
  }

  res.send(
    generateResponseForArray({
      type: statusType.SUCCESS,
      message: "Thành công",
      arrayData: roles,
    })
  );
};

module.exports = {
  getAllRoles,
};
