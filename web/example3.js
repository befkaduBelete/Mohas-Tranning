const http = require("node:http");

const server = http.createServer((req, res) => {
  const fullname = {
    firstName: "Befkadu",
    lastname: "Belete",
  };

  res.writeHead(200, {
    // "Content-type": "text/plain",
    "Content-type": "text/html",
  });
  res.end("<h1> Hello  World </h1>");
});

server.listen(3000, () => {
  console.log("Server run at 3000 port");
});
