const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    birth_name: {
      type: String,
      required: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    artist_name: {
      type: String,
      required: true,
    },
    birth_date: {
      type: Date,
      required: true,
    },
    birth_place: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    blood_type: {
      type: String,
      required: true,
    },
    occupation: {
      type: [{ type: String, default: "" }],
      required: true,
    },
    debut: {
      type: String,
      required: true,
    },
    debut_date: {
      type: Date,
      required: true,
    },
    years_active: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    associations: {
      type: [{ type: String, default: "" }],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
