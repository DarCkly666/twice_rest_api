const express = require("express");
const dotenv = require("dotenv");
const connection = require("../db/connection");
const router = require("../routes/index.routes");

class Server {
  constructor() {
    dotenv.config();
    this.app = express();
    this.config();
    this.connectionDB();
    this.routes();
  }

  async connectionDB() {
    try {
      await connection.authenticate();
      await connection.sync({ alter: true });
      console.log("Connection has been established successfully.");
    } catch (err) {
      console.log("Unable to connect to the database:", err);
    }
  }

  config() {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(router);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server started on port", this.app.get("port"));
    });
  }
}

module.exports = Server;
