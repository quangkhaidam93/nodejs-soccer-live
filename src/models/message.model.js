const Sequelize = require("sequelize");
const db = require("../database");
const { makePaginate } = require('sequelize-cursor-pagination');

const Message = db.define("Messages", {
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
  message: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  roomId: {
    allowNull: false,
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

Message.paginate = makePaginate(Message);

module.exports = Message;
