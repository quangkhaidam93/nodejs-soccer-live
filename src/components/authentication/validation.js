const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

function validateDataWhenSignUp(req, res) {
  const username = req.body["username"];
  const password = req.body["password"];
  const nickname = req.body["nickname"];

  if (!username || !password || !nickname) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Thông tin nhập không đủ",
      })
    );
  }

  return {
    username,
    password,
    nickname
  }
}

function validateDataWhenSignIn(req, res) {
  const username = req.body["username"];
  const password = req.body["password"];

  if (!username || !password) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Thông tin nhập không đủ",
      })
    );
  }

  return {
    username,
    password
  }
}

module.exports = {
  validateDataWhenSignUp,
  validateDataWhenSignIn
}
