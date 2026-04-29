const http = require("node:http");

const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Home Page ");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("About  Page ");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at port 3000");
});
