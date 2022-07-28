require("dotenv").config();
const User = require("../../models/user.model");
const { roleTypes } = require("../../models/role.model");
const userService = require("../user/service");
const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");
const { hashPassword, compareHashPassword } = require("../../utils/password");
const { generateAccessToken } = require("../../utils/token");
const { validateDataWhenSignUp, validateDataWhenSignIn } = require("./validation")


const signIn = async (req, res) => {
  const { username, password } = validateDataWhenSignIn(req, res);

  const user = await userService.findUserByUsername(username);

  if (!user) {
    res.send(
      generateResponse({
        type: statusType.NOT_FOUND,
        message: `${username} không tồn tại`,
      })
    );
  }

  const isCorrectPassword = await compareHashPassword(password, user.password);

  if (!isCorrectPassword) {
    res.send(
      generateResponse({
        type: statusType.NOT_FOUND,
        message: "Sai mật khẩu",
      })
    );
  } else {
    const token = generateAccessToken(user.username, user.id);

    res.send(
      generateResponse({
        type: statusType.SUCCESS,
        message: "Đăng nhập thành công",
        data: {
          token,
        }
      })
    );
  }
};

const signUp = async (req, res) => {
  const { username, password, nickname } = validateDataWhenSignUp(req, res);

  const isUsernameExisted = !!(await userService.findUserByUsername(username));
  if (isUsernameExisted) {
    res.send(
      generateResponse({
        type: statusType.SEE_OTHER,
        message: "Username đã tồn tại!",
      })
    );
  }

  const hashedPassword = await hashPassword(password);

  const user = new User({
    username,
    password: hashedPassword,
    nickname,
    roleId: roleTypes.USER,
  });

  const createdUser = await user.save();

  const token = generateAccessToken(createdUser.username, createdUser.id);

  res.set('Authorization', token);
  res.send(
    generateResponse({
      type: statusType.CREATED,
      message: "Đăng kí thành công",
      data: {
        token,
      }
    })
  );
};

module.exports = {
  signIn,
  signUp,
};
