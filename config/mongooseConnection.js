const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}`)
  .then(() => {
    debug("DB Connected...");
  })
  .catch((err) => {
    debug(err);
  });

module.exports = mongoose.connection;
