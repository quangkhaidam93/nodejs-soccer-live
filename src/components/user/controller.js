const User = require("../../models/user.model");
const { findUserByUsername, findUsers } = require("./service");
const {
  generateResponse,
  generateResponseForArray,
} = require("../../utils/response");
const statusType = require("../../constants/statusType");

const getAllUsers = async (req, res) => {
  try {
    const users = await findUsers();
    res.send(
      generateResponseForArray({
        type: statusType.SUCCESS,
        message: "Tìm thành công",
        arrayData: users,
      })
    );
  } catch (err) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Something go wrong!",
      })
    );
  }
};

const getUserInfo = async (req, res) => {
  const username = req.params.username;

  const user = await findUserByUsername(username);

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      message: "Tìm thành công",
      data: user,
    })
  );
};

module.exports = {
  getUserInfo,
  getAllUsers,
};
