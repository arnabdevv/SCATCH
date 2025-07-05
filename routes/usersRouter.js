// User authentication routes
const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authController");

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("Hey User");
});

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Logout user
router.get("/logout", logout);

module.exports = router;
