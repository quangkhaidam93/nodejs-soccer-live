const Sequelize = require("sequelize");
const db = require("../database");

const Room = db.define("Rooms", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  casterId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: "Casters",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  leagueId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: "Leagues",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  club1Id: {
    allow: false,
    type: Sequelize.INTEGER,
    references: {
      model: "Clubs",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  club2Id: {
    allow: false,
    type: Sequelize.INTEGER,
    references: {
      model: "Clubs",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
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

module.exports = Room;
