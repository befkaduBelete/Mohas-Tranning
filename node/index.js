const http = require("node:http");


const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        "Content-type":"text/plain"
    })
    const name ="Befkadu Belete"
    req.url
    console.log(req.url)
    console.log(req.method)
    res.end("QIYASS TRANNING")


})
server.listen(3000, ()=>{
    console.log("Server run at 3000 PORT")
})