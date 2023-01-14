const express = require("express");
const path = require("path");

//////////
const rootDir = require("../utils/path-heloper");
const router = express.Router();
//////////

//dynamic route
// router.get("/:greet", (req, res, next) => {
//   console.log(req.params.greet);
//   res.send(`<h1>Hello ${req.params.greet}</h1>`);
// });

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "homepage.html"));
});

module.exports = router;
