const path = require("path");
const express = require("express");
const exapp = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");

exapp.use(express.static(staticPath));

exapp.get("/", (request, response) => {
  response.send("welcome to my page");
});

exapp.get("/about", (request, response) => {
  response.send("welcome to my about page");
});

exapp.get("/contact", (request, response) => {
  response.send("welcome to my contact page");
});

exapp.get("/temp", (request, response) => {
  response.send("welcome to my temp page");
});

exapp.listen(port, () => {
  console.log("listening ");
});
