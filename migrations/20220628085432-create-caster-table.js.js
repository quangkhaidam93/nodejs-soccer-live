'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Casters", {
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Casters");
  }
};
