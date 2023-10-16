const fs = require("fs")

fs.mkdir('./Kanas', (err) =>{
    if(err)throw err
    console.log("fff");
})



if(!fs.existsSync("./new")){
    fs.mkdir("./new", (err) =>{
        if(err)throw err
        console.log("New Dir");
    })
}

if(fs.existsSync("./new")){
    fs.rmdir("./new", (err) =>{
        if(err)throw err
        console.log("Dir Remove");
    })
}