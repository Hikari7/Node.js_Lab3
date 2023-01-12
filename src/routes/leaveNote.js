const express = require("express");

const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path-heloper");

//middleware的な
router.get("/leave", (req, res, next) => {
  res.send(`
        <form action="/" method="POST">
            <input type="text" name="name" placeholder="Name">
            <button type="submit">Leave a note</button>
        </form>
    `);
});

router.post("/", (req, res, next) => {
  console.log("Note: ", req.body.name);
  //   res.sendFile("view.html");

  //リダイレクトはいい感じにされたけどdisplay the notes left before in a listのやり方がわかんない

  res.sendFile(path.join(rootDir, "src", "views", "view.html"));
  res.redirect("/");
});

module.exports = router;

//todo:
//1. view.htmlに追記？
//2. CSSの適用
