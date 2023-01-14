//import 3rd party modules
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

//initialize express and body-parser
const app = express();

// app.use(express.static(__dirname + "public/main.css"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

//import routes

const leaveNoteRoutes = require("./routes/leaveNote");
const readNoteRoutes = require("./routes/readNote");
const homeRoutes = require("./routes/home");


//routes
//もし第一引数に"/member"みたいなパスを入れたらそれが親のパスみたいになる、kinda concatenate
///api/v1とか第一引数に入れることが多いらしい
//んでその後にmiddleWareの引数も入れられるらしい
app.use(leaveNoteRoutes);
app.use(readNoteRoutes);
app.use(homeRoutes);

//catch-all(全部受け取る) route/middleware
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${8000} 🚀`);
});
