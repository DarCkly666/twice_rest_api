const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const dataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    name_hangul: {
      type: String,
      required: true,
    },
    name_katakana: {
      type: String,
      required: true,
    },
    debut: {
      type: [{ type: String, default: "" }],
      required: true,
    },
    fandom: {
      type: String,
      required: true,
    },
    colors: {
      type: [{ type: String, default: "" }],
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    url_japan: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    genres: {
      type: [{ type: String, default: "" }],
      required: true,
    },
    labels: {
      type: [{ type: String, default: "" }],
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
