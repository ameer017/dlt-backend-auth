// import { readFile } from 'node:fs';
// How To Read Files
const { error } = require("console");
const fs = require("fs");
const path = require("path")

fs.readFile("./files/starter.txt","utf8", (err, data) => {
  if (err) throw err;
//   console.log(data.toString());
console.log(data);

});

fs.readFile(path.join(__dirname,"files","starter.txt"),"utf8", (err, data) => {
  if (err) throw err;
//   console.log(data.toString());
console.log(data);
});

//Existing uncaught Error
process.on("uncaughtException",error =>{
    console.error(`there was an uncaught error :${error}`
    ), process.exit(1)
})

console.log("Hello ........");

// Write File 

fs.writeFile(path.join(__dirname,"files",'text.txt'), `Here In DLT Africa it's a new Dawn`,(err) =>{
  if(err)throw err
  console.log('write completed');

// Append File

  fs.appendFile(path.join(__dirname,"files","text.txt"),"\n\nTesting testing", (err) =>{
  if(err)throw err
  console.log("append done");
})
// Re-naming File
fs.rename(path.join(__dirname,'files',"text.txt"),path.join(__dirname,"files",'rename.txt'), (err) =>{
  if(err)throw err
  console.log('rename completed');
})

})


fs.readFile("./files/text.txt","utf8", (err,data) =>{
  if(err)throw err
  console.log(data);
})



