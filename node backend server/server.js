const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request is made");
//   console.log(req.method);
//   console.log(req.url);



});

server.listen(3000, "localhost", () => {
  console.log("server is listening");
});
