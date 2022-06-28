const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password) {
  try {
    console.log('khai bat dau hashPassword', password);
    const salt = await bcrypt.genSalt(saltRounds);
    console.log('khai genSalt', salt);
    const hash = await bcrypt.hash(password, salt);
    console.log('khai hash', hash);
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
