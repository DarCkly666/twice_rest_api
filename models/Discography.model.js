const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const discographySchema = new Schema({
  title: String,
  year: Number,
  label: String,
  type: String,
  spotify_url: String,
});

const Discography = mongoose.model("Discography", discographySchema);

module.exports = Discography;
