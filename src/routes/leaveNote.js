const express = require("express");
const fs = require("fs");

const router = express.Router();
// const path = require("path");
// const rootDir = require("../utils/path-heloper");

//middleware的な
router.get("/leave", (req, res, next) => {
  res.send(`
  <form action="/leave" method="POST">
      <input type="text" name="name" placeholder="Name">
      <button type="submit">Leave a note</button>
  </form>
`);
});

//body comes from body

router.post("/leave", (req, res, next) => {
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1];

    fs.writeFile("message.txt", message, (err) => {
      if (err) throw err;
      res.statusCode = 302;
      res.setHeader("Location", "/read");
      return res.end();
    });
  });
});

module.exports = router;
