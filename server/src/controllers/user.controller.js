const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.get("", function (req, res) {
    return res.render("users/login.ejs");
  });

router.get("/regs", function (req, res) {
    return res.render("users/register.ejs");
  });


module.exports = router;