const express = require("express");
const dotenv = require("dotenv");
const connection = require("../db/connection");
const router = require("../routes/index.routes");

class Server {
  constructor() {
    dotenv.config();
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.config();
    this.connectionDB();
    this.routes();
  }

  async connectionDB() {
    try {
      await connection();
      console.log("Connection has been established successfully.");
    } catch (err) {
      console.log("Unable to connect to the database:", err);
    }
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(router);
  }

  start() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
