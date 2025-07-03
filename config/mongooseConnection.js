const mongoose = require("mongoose");

const uri = "mongodb+srv://arnab312:scatch@cluster1.vuai6h6.mongodb.net/";

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
