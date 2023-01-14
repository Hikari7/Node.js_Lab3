const express = require("express");
const fs = require("fs");

const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path-heloper");

router.get("/read", (req, res, next) => {
  fs.readFile(path.join(rootDir, "..", "message.txt"), (err, content) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Read notes left by others</h2>");
      res.write("\n")
      res.end(content, "utf8");
    }
  });
});

module.exports = router;
