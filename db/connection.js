const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;

const connection = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
});

module.exports = connection;
