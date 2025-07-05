// Mongoose schema for Product
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: Buffer, // Product image (stored as binary)
  name: String, // Product name
  price: Number, // Product price
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String, // Background color for display
  panelColor: String, // Panel color for display
  textColor: String, // Text color for display
});

module.exports = mongoose.model("product", productSchema);
