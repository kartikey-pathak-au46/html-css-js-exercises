const express = require("express");
const app = express();
app.use(express.json()); //middleware fuc used in post req to turn data in json
app.listen(3000);
let users = [
  {
    id: 1,
    name: "Abhishek",
  },
  {
    id: 2,
    name: "kartikey",
  },
  {
    id: 3,
    name: "shiv",
  },
];

const userRouter = express.Router();
app.use("/users", userRouter);

userRouter
  .route("/")
  .get(getUser)
  .post(postuser)
  .patch(postuser)
  .delete(deleteUser);

userRouter.route("/:id").get(getUserById);

// // get req
// app.get("/users", function (req, res) {
//   res.send(users);
// });

// // post req

// app.post("/users", function (req, res) {
//   console.log(req.body);
//   users = req.body;
//   res.json({
//     message: "data recieved",
//     user: req.body,
//   });
// });

// // update patch

// app.patch("/users", function (req, res) {
//   console.log("req.body->", req.body);
//   let dataToBeUpdated = req.body;

//   for (let key in dataToBeUpdated) {
//     users[key] = dataToBeUpdated[key];
//   }
//   res.json({
//     message: "data sucess",
//   });
// });

// // delete req

// app.delete("/users", function (req, res) {
//   users = {};
//   res.json({
//     message: "data deleted",
//   });
// });

function getUser(req, res) {
  res.send(users);
}

function postuser(req, res) {
  console.log(req.body);
  users = req.body;
  res.json({
    message: "data recieved",
    user: req.body,
  });
}

function updateuser(req, res) {
  console.log("req.body->", req.body);
  let dataToBeUpdated = req.body;

  for (let key in dataToBeUpdated) {
    users[key] = dataToBeUpdated[key];
  }
  res.json({
    message: "data sucess",
  });
}

function deleteUser(req, res) {
  users = {};
  res.json({
    message: "data deleted",
  });
}

function getUserById(req, res) {
  console.log(req.param.id);
  let paramId = req.param.id;
  let obj = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i]["id"] == paramId) {
      obj = users[i];
    }
  }
  res.json({
    message: "req received",
    data: obj,
  });
}
