const express = require("express");
const fs = require("fs");

const router = express.Router();
// const path = require("path");
// const rootDir = require("../utils/path-heloper");

//middleware的な
//action: フォームが送信されたときに処理のためにデータが送信されるURL
router.get("/leave", (req, res, next) => {
  res.send(`
  <form action="/leave" method="POST">
      <input type="text" name="name" placeholder="Name">
      <button type="submit">Leave a note</button>
  </form>
`);
});

router.post("/leave", (req, res, next) => {
  const { name } = req.body;

  const message = "\n" + name;
  fs.appendFile("message.txt", message, (err) => {
    console.log(err);
    if (err) throw err;
    res.statusCode = 302;
    return res.redirect("/read");
  });
});

module.exports = router;
