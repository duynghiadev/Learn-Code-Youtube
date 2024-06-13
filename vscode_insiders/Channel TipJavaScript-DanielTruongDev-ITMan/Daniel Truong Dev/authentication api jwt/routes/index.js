const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", function (req, res, next) {
  res.send("Hello World");
});

module.exports = router;
