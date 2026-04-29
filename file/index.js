const fs = require("fs")

//console.log(fs)

// fs.writeFile("./docs/test.txt","Test this is my firest file",()=>{
//     console.log("File hs been created ")
// })

// fs.readFile("./docs/test.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

const os = require("os")
console.log(os.platform(), os.homedir())

const readStream  = fs.createReadStream("./docs/data.txt");

readStream.on("data", (chunk)=>{
    console.log("--------NEW CHENK-----------")
    console.log(chunk.toString())
})