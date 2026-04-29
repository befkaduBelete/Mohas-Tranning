const http = require("node:http");

const server = http.createServer((req, res) => {
  const fullname = {
    firstName: "Befkadu",
    lastname: "Belete",
  };

  res.writeHead(200, {
    "Content-type": "json",
  });
  res.end(JSON.stringify(fullname));
});

server.listen(3000, () => {
  console.log("Server run at 3000 port");
});
