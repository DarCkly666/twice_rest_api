const connection = require("../db/connection");
const { DataTypes } = require("sequelize");

const Discography = connection.define(
  "discography",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spotify_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Discography;
