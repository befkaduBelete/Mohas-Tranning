
const http = require("node:http");


const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        "Content-type":"text/html"
    })
    
    console.log(req.url)
    console.log(req.method)
    res.end("<h1> THIS IS THE HTML CONTENT </h1>")


})
server.listen(3000, ()=>{
    console.log("Server run at 3000 PORT")
})