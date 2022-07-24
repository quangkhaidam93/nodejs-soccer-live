"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        password: "$2b$10$S90nAFrl6VvXk.gCHsx/4ekOHKQr43jTQFGpD4WGNDG7RBTtt05uG",
        nickname: "admin",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
