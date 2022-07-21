'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface
    .bulkInsert("Leagues", [
      {
        name: "C1",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "EPL",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ligue 1",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laliga",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bundesliga",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Leagues', null, {});
  }
};
