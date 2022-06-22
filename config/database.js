const envConfig = require('./environment');

module.exports = {
  dev: {
    username: envConfig.postgresUser,
    password: envConfig.postgresPassword,
    database: envConfig.postgresDatabase,
    host: '127.0.0.1',
    dialect: "postgres",
  },
  prod: {
    username: envConfig.postgresUser,
    password: envConfig.postgresPassword,
    database: envConfig.postgresDatabase,
    host: '127.0.0.1',
    dialect: "postgres",
  },
};
