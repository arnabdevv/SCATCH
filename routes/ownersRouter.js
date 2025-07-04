const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownersModel");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(503)
        .send("You don't have permission to create a new owner");
    }

    let { fullname, email, password } = req.body;

    let CreatedOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(CreatedOwner);
  });
}

router.get("/", (req, res) => {
  res.send("Hey Owners");
});

module.exports = router;
