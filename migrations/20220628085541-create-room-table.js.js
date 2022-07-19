"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rooms", {
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
      streamUrl: {
        allow: false,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rooms");
  },
};
