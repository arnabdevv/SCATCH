// Mongoose schema for User
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String, // User's full name
  email: String, // Email address
  password: String, // Password (hashed)
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  contact: Number, // Contact number
  picture: String, // Profile picture URL
});

module.exports = mongoose.model("user", userSchema);
