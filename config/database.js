const envConfig = require('./environment');

module.exports = {
  dev: {
    username: envConfig.postgresUser,
    password: envConfig.postgresPassword,
    database: envConfig.postgresDatabase,
    host: 'db',
    dialect: "postgres",
  },
  prod: {
    username: envConfig.postgresUser,
    password: envConfig.postgresPassword,
    database: envConfig.postgresDatabase,
    host: 'db',
    dialect: "postgres",
  },
};
