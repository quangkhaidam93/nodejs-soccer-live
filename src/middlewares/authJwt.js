const jwt = require("jsonwebtoken");
const { generateResponse } = require("../utils/response");
const statusType = require("../constants/statusType");
const { isValidToken, getPayloadFromToken } = require("../utils/token");
const { checkUserIsAdmin } = require("../components/user/service");

const verifyToken = (req, res, next) => {
  const rawToken = req.headers.authorization;

  if (!rawToken) {
    res.send(
      generateResponse({
        type: statusType.UNAUTHORIZED,
        message: "Không có token!",
      })
    );
  }

  const token = rawToken.replace("Bearer ", "");

  const isValid = isValidToken(token);

  if (!isValid) {
    res.send(
      generateResponse({
        type: statusType.UNAUTHORIZED,
        message: "Token hết hạn",
      })
    );
  }

  next();
};

const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization;

  const { userName, userId } = getPayloadFromToken(token);

  const isAdmin = await checkUserIsAdmin();

  if (!isAdmin) {
    res.send(
      generateResponse({
        type: statusType.FORBIDDEN,
        message: "Không phải admin",
      })
    );
  }

  next();
}

module.exports = {
  verifyToken,
  isAdmin
}
