const { Role } = require('../../models/role.model');

const findRoleNameById = async (id) => {
  const role = await Role.findOne({ where: { id } });
  return role.name;
}

module.exports = {
  findRoleNameById,
}
