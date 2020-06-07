require('dotenv').config();

module.exports = {
  "development": {
  username: process.env.ENV_DB_USER_DEV,
  password: process.env.ENV_DB_PASS_DEV,
  database: process.env.ENV_DB_NAME_DEV,
  // storage: process.env.DATABASE_URL,
  // url: process.env.DATABASE_URL,
  host: 'localhost',
  port: '5434',
  dialect: 'postgres',
  type: 'postgres',
  protocol: 'postgres',
  // migrationsRun: true
  },
  "production": {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    URI: process.env.
    DATABASE_URI,
    // use_env_variable: process.env.DATABASE_URL
  }
}
