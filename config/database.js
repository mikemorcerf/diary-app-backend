module.exports = {
  username: process.env.ENV_DB_USER,
  password: process.env.ENV_DB_PASS,
  database: process.env.ENV_DB_NAME,
  storage: process.env.DATABASE_URL,
  host: process.env.ENV_DB_HOST,
  port: process.env.ENV_DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  protocol: 'postgres',
  ssl: true
}
