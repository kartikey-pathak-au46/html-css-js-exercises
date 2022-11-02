const express = require("express");
const app = express();
app.use(express.json()); //middleware fuc used in post req to turn data in json
app.listen(3000);
let users = {};
app.get("/users", function (req, res) {
  res.send(users);
});

// post req

app.post("/users", function (req, res) {
  console.log(req.body);
  users = req.body;
  res.json({
    message: "data recieved",
    user: req.body,
  });
});

// update patch

app.patch("/users", function (req, res) {
  console.log("req.body->", req.body);
  let dataToBeUpdated = req.body;

  for (let key in dataToBeUpdated) {
    users[key] = dataToBeUpdated[key];
  }
  res.json({
    message: "data sucess",
  });
});

// delete req

app.delete("/users", function (req, res) {
  users = {};
  res.json({
    message: "data deleted",
  });
});
