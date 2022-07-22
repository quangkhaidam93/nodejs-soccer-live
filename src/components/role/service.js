const { Role } = require('../../models/role.model');

const findRoleNameById = async (id) => {
  try {
    const role = await Role.findOne({ where: { id } });
    return role.name;
  } catch (err) {
    return null;
  }
}

const findAllRoles = async () => {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (err) {
    return null;
  }
}

module.exports = {
  findRoleNameById,
  findAllRoles,
}
