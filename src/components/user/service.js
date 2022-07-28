const User = require('../../models/user.model');
const { findRoleNameById } = require('../role/service');
const { roleTypes } = require('../../models/role.model');

const findUsers = async () => {
  try {
    const users = await User.findAll({attributes: {exclude: ['password']}});
    return users;
  } catch (err) {
    console.log('findUserByUsername error', err);
    return null;
  }
}

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (err) {
    console.log('findUserByUsername error', err);
    return null;
  }
}

const updateUser = async (id, updatedUser) => {
  try {
    const user = await User.update(
      { ...updatedUser },
      { where: { id } }
    );
    return user[0];
  } catch (err) {
    return null;
  }
}

const checkUserIsAdmin = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });

    if (!user) return null;
    
    // const roleName = await findRoleNameById(user.roleId);

    if (user.roleId === roleTypes.ADMIN) return true;
    return false;
  } catch (err) {
    return false;
  }
}

module.exports = {
  findUserByUsername,
  checkUserIsAdmin,
  findUsers,
  updateUser,
}
