const envConfigs = require('../config/environment');

module.exports = {
  dev: {
    username: envConfigs.postgresUser,
    password: envConfigs.postgresPassword,
    database: envConfigs.postgresDatabase,
    host: '127.0.0.1',
    dialect: "postgres",
  },
  prod: {
    username: envConfigs.postgresUser,
    password: envConfigs.postgresPassword,
    database: envConfigs.postgresDatabase,
    host: '127.0.0.1',
    dialect: "postgres",
  },
};
