const http = require("http");
const handleRequest = require("./controller/requestController");

const port = 8088;
const server = http.createServer(handleRequest);

server.listen(port, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("server is started : ");
    console.log("http://localhost:" + port);
  }
});
