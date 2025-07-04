const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const userModel = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

router.get("/", (req, res) => {
  res.send("Hey User");
});

router.post("/register", (req, res) => {
  try {
    let { email, password, fullname } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.send(err.message);
        } else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          });

          res.cookie("token", generateToken(user));

          res.send("User Created Successfully");
        }
      });
    });
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = router;
