const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstNum: String,
});

module.exports = mongoose.model("owner", ownerSchema);
