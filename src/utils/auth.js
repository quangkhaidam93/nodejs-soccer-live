const jwt = require("jsonwebtoken");
const { isValidToken, getPayloadFromToken } = require("./token");
const { checkUserIsAdmin } = require("../components/user/service");

async function isAdmin(req) {
  const token = req.headers.authorization;

  if (!token) return false;

  const { userName, userId } = getPayloadFromToken(token);

  const isAdmin = await checkUserIsAdmin();
  
  if (!isAdmin) return false;

  return true;
}

module.exports = {
  isAdmin
}