'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface
    .bulkInsert("Casters", [
      {
        fullName: "BLV 1",
        avatar: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "BLV 2",
        avatar: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "BLV 3",
        avatar: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "BLV 4",
        avatar: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "BLV 5",
        avatar: 'https://google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Casters', null, {});
  }
};
