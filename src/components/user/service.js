const User = require('../../models/user.model');
const { findRoleNameById } = require('../role/service');
const { roleTypes } = require('../../models/role.model');

const findUserByUsername = async (username) => {
  const user = await User.findOne({ where: { username } });
  return user;
}

const checkUserIsAdmin = async (id) => {
  const user = await User.findOne({ where: { id } });
  
  if (!user) return null;
  
  const roleName = findRoleNameById(user.roleId);

  if (roleName === roleTypes.ADMIN) return true;
  return false;
}

module.exports = {
  findUserByUsername,
  checkUserIsAdmin
}
