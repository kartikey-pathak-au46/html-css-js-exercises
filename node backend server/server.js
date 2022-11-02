const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.sendFile("./html/index.html", { root: __dirname });
});
app.get("/about", function (req, res) {
  res.sendFile("./html/aboutUs.html", { root: __dirname });
});
app.get("/about-us", function (req, res) {
  res.redirect("/about");
});
app.use("", function (req, res) {
  res.status(404).sendFile("./html/404page.html", { root: __dirname });
});

app.listen(3000);
