const router = require("express").Router(),
  tokenGenerator = require("../utils/tokenGenerator"),
  db = require("../database/db"),
  bcrypt = require("bcrypt");

//REGISTER ROUTE
router.get("/", (req, res) => {
  res.send("Auth Route");
});
//LOGIN ROUTE

//VERIFY ROUTE

module.exports = router;
