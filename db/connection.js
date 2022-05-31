const mongoose = require("mongoose");

function connection() {
  const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tq2s6.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
    mongooseOptions
  );
}

module.exports = connection;
