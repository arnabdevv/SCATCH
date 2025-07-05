// Main routes: landing and shop
const express = require("express");
const isLoggedin = require("../middlewares/isLoggedin"); // Auth middleware
const productModel = require("../models/productModel"); // Product model

const router = express.Router();

// Landing page (register/login)
router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, isLoggedin: false });
});

// Shop page (requires login)
router.get("/shop", isLoggedin, async (req, res) => {
  let products = await productModel.find();
  res.render("shop", { products, isLoggedin: true });
});

module.exports = router;
