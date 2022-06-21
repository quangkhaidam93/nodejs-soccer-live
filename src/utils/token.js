const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '3600s' });
}