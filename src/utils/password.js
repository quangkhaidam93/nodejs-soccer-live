const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  catch (err) {
    return null;
  }
}

async function compareHashPassword(password, hashedPassword) {
  try {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  }
  catch (err) {
    return err
  }
}

module.exports = {
  hashPassword,
  compareHashPassword
}
