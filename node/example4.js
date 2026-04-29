const http = require("node:http");
const fs = require("fs");
const console = require("node:console");

const server = http.createServer((req, res) => {
  let path = "./page";
   const name="ALem bekagn";
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  switch (req.url) {
    case "/":
      path += "/home.html";
      break;
    case "/about":
      path += "/home.html";
      break;
    default:
      path += "/404.html";
  }
  // if(res.url==="/"){
  //     path += "/home.html";
  // }else if(req.url==="/about"){
  //       path += "/about.html";
  // }else{
  //    path += "/404.html";
  // }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.write({name:name})
      res.end();
    }
  });
});
server.listen(3000, () => {
  console.log("Server run at 3000 PORT");
});
