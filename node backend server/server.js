const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request is made");
  // console.log(req);
  // console.log(req.method);
  // console.log(req.url);

  // res.setHeader("Content-Type", "text/html");
  // res.write("<h1>hello kartikey</h1>");
  // res.write("<h1>hello everyone</h1>");
  // res.end();
  let path = "./html";
  switch (req.url) {
    case "/":
      path += "/index.html";
      break;

    case "/about":
      path += "/aboutUs.html";
      break;
    default:
      path += "/404page.html";
  }

  fs.readFile("./html/index.html", (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is listening");
});
