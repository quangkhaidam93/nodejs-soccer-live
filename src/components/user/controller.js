const User = require("../../models/user.model");
const { findUserByUsername } = require('./service');
const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const getUserInfo = async (req, res) => {
  const username = req.params.username;

  const user = await findUserByUsername(username);

  res.send(generateResponse({type: statusType.SUCCESS, message: 'Tìm thành công', data: user}));
}

module.exports = {
  getUserInfo
}