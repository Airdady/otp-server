const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const database = mongoose
  .connect(`mongodb://mongo:2ZuJC3VlJpCgBNQSR2Ps@containers-us-west-79.railway.app:7853`, options)
  .then(() => console.log("Connected to database."))
  .catch((err) => console.error("Error connecting to database:", err.message));

module.exports = database;
