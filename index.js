//import 3rd party modules
const express = require("express");
const bodyParser = require("body-parser");

//initialize express and body-parser
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//import routes
const leaveNoteRoutes = require("./src/routes/leaveNote");
const readNoteRoutes = require("./src/routes/readNote");
const homeRoutes = require("./src/routes/home");

//なんでうまくImportされないんですかね？？？
const cssRoutes = require("./src/public/main.css");

//routes
//もし第一引数に"/member"みたいなパスを入れたらそれが親のパスみたいになる、kinda concatenate
///api/v1とか第一引数に入れることが多いらしい
//んでその後にmiddleWareの引数も入れられるらしい
app.use(leaveNoteRoutes);
app.use(readNoteRoutes);
app.use(homeRoutes);
// app.use(cssRoutes);

//catch-all route/middleware
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${8000} 🚀`);
});
