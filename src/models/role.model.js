const Sequelize = require('sequelize');
const db = require('../database');

const roleTypes = {
  USER: 1,
  ADMIN: 2,
}

const Role = db.define('Roles', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = {
  Role,
  roleTypes,
}
