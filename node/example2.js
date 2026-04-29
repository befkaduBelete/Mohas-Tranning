
const http = require("node:http");


const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        "Content-type":"json"
    })
    const sudent = {
        fname:"Kalaab",
        lname:"Mamao"
    }
    console.log(req.url)
    console.log(req.method)
    res.end(JSON.stringify(sudent))


})
server.listen(3000, ()=>{
    console.log("Server run at 3000 PORT")
})