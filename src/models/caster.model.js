const Sequelize = require("sequelize");
const db = require("../database");

const Caster = db.define("Casters", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  fullName: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  avatar: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});

module.exports = Caster;
