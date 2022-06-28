const jwt = require("jsonwebtoken");
const envConfigs = require("../../config/environment");

function generateAccessToken(username, userId) {
  return jwt.sign({ username, userId }, envConfigs.tokenSecret, {
    expiresIn: "7d",
  });
}

function isValidToken(token) {
  try {
    const secretKey = envConfigs.tokenSecret;
    const isValid = jwt.verify(token, secretKey);
    if (isValid) return true;
    return false;
  } catch (err) {
    return false;
  }
}

function getPayloadFromToken(token) {
  const { username, userId } = jwt.decode(token);
  return  {
    username,
    userId,
  }
}

module.exports = {
  generateAccessToken,
  isValidToken,
  getPayloadFromToken,
};
