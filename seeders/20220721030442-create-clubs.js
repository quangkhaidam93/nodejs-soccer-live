'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface
    .bulkInsert("Clubs", [
      {
        name: "PSG",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MU",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Liverpool",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MC",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Real",
        image: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Clubs', null, {});
  }
};
