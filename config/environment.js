require('dotenv').config();

module.exports = {
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDatabase: process.env.POSTGRES_DATABASE,
  tokenSecret: process.env.TOKEN_SECRET,
  serverPort: process.env.SERVER_PORT,
}