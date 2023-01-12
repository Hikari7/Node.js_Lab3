const express = require("express");

const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path-heloper");

// router.post("/read", (req, res, next) => {
//   console.log("Name is: ", req.body.name);
//   res.redirect("/");
// });

router.get("/read", (req, res, next) => {
  console.log("Note: ", req.body.name);
  //   res.sendFile("view.html");
  res.sendFile(path.join(rootDir, "src", "views", "view.html"));
//   res.sendFile(path.join(rootDir, "src", "public", "main.css"));
  //   res.redirect("/");
});

module.exports = router;
