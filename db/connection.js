const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const connection = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
