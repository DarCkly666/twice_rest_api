const connection = require("../db/connection");
const { DataTypes } = require("sequelize");

const Data = connection.define(
  "data",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_hangul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_katakana: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    debut: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    fandom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_japan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    labels: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Data;
