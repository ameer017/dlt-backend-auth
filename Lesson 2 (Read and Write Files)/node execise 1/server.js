const fs = require("fs");
const path = require("path");

fs.readFile("./reg/test.txt","utf8", (err,data) =>{
    if(err)throw err
    console.log(data);
})

fs.writeFile(path.join(__dirname, "reg", "node.txt"),"Hi my fans",(err)=>{
    if(err)throw err
    console.log("Write completed");
})

fs.rename(path.join(__dirname, "reg", "node.txt"),path.join(__dirname, "reg", "ten.txt"),(err)=>{
    if(err)throw err
    console.log("renamed");
})

process.on("uncaughtException",error =>{
    console.error(`there was an uncaught error :${error}`
    ), process.exit(1)
})
