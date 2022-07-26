const User = require("../../models/user.model");
const userService = require("./service");
const {
  generateResponse,
  generateResponseForArray,
} = require("../../utils/response");
const statusType = require("../../constants/statusType");
const { validateUserId, validateUserObject } = require("./validation");
const { isEmptyArray } = require("../../utils/array");

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.findUsers();

    if (users || isEmptyArray(users)) {
      res.send(
        generateResponseForArray({
          type: statusType.SUCCESS,
          message: "Tìm thành công",
          arrayData: users,
        })
      );
      return;
    }

    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Something go wrong!",
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

  const user = await userService.findUserByUsername(username);

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      message: "Tìm thành công",
      data: user,
    })
  );
};

const editUserInfo = async (req, res) => {
  const userId = validateUserId(req, res);
  const updatedUser = validateUserObject(req, res);
  const user = await userService.updateUser(userId, updatedUser);
  if (!user) {
    res.send(
      generateResponse({
        type: statusType.INTERNAL_SERVER_ERROR,
        message: "Lỗi server",
      })
    );
    return;
  }

  res.send(
    generateResponse({
      type: statusType.SUCCESS,
      message: "Thành công",
      data: user,
    })
  );
};

module.exports = {
  getUserInfo,
  getAllUsers,
  editUserInfo,
};
