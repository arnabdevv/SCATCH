// Mongoose schema for Owner
const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: String, // Owner's full name
  email: String, // Email address
  password: String, // Password (should be hashed)
  products: {
    type: Array,
    default: [],
  },
  picture: String, // Profile picture URL
  gstNum: String, // GST number
});

module.exports = mongoose.model("owner", ownerSchema);
