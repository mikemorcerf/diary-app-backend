module.exports = {
  username: process.env.ENV_DB_USER,
  password: process.env.ENV_DB_PASS,
  database: process.env.ENV_DB_NAME,
  host: process.env.DATABASE_URL,
  dialect: 'postgres',
  protocol: 'postgres',
  port: process.env.ENV_DB_PORT
}
