const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Befkadu";
  let html = fs.readFileSync("./index2.html", "utf-8");
  html = html.replace("{{name}}", name);

  // fs.createReadStream("./index.html").pipe(res);
  res.writeHead(200, {
    // "Content-type": "text/plain",
    "Content-type": "text/html",
  });
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server run at 3000 port");
});
