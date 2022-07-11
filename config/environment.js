require('dotenv').config();

module.exports = {
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDatabase: process.env.POSTGRES_DATABASE,
  tokenSecret: process.env.TOKEN_SECRET,
  serverPort: process.env.SERVER_PORT,
  serverPortWithSSL: process.env.SERVER_PORT_WITH_SSL,
  nodeEnv: process.env.NODE_ENV,
  serverDomain: process.env.SERVER_DOMAIN,
  apiDomain: process.env.API_DOMAIN,
}