const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const dataSchema = new Schema({
  name: String,
  name_hangul: String,
  name_katakana: String,
  debut: [{ type: String, default: "" }],
  fandom: String,
  colors: [{ type: String, default: "" }],
  logo: String,
  url: String,
  url_japan: String,
  origin: String,
  genres: [{ type: String, default: "" }],
  labels: [{ type: String, default: "" }],
  status: String,
  description: String,
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
