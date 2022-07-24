const { generateResponse } = require("../../utils/response");
const statusType = require("../../constants/statusType");

const validateUserId = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Không có league id",
      })
    );
    return;
  }

  return userId;
};

const validateUserObject = (req, res) => {
  const user = req.body;

  if (!user) {
    res.send(
      generateResponse({
        type: statusType.BAD_REQUEST,
        message: "Body rỗng",
      })
    );
    return;
  }

  delete user.id;

  return user;
};

module.exports = {
  validateUserId,
  validateUserObject,
};
