const envConfigs = require('../../config/environment');
const { Sequelize } = require('sequelize');
const db = new Sequelize(envConfigs.postgresDatabase, envConfigs.postgresUser, envConfigs.postgresPassword, {
    host: 'db',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;