const express = require("express");
const fs = require("fs");

const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path-heloper");

router.get("/read", (req, res, next) => {
  console.log("Note: ", req.body.name);
  //   res.sendFile("view.html");
  // res.sendFile(path.join(rootDir, "src", "views", "view.html"));
  //   res.sendFile(path.join(rootDir, "src", "public", "main.css"));
  //   res.redirect("/");

  fs.readFile(rootDir, (err, content) => {
    if (err) {
      console.log("Error😭");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Read notes left by others</h2>");
      res.end(content, "utf8");
    }
  });
});

module.exports = router;
