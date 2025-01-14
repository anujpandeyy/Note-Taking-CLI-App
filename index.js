var fs = require("fs");

const data = "Anuj Pandey";

fs.writeFile('./textFiles/hello.txt',data,(err,data)=>{
    if (err) throw err;
    console.log("The file has been saved!");
})


fs.readFile('./textFiles/hello.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})


fs.unlink('./textFiles/delete.txt',(err)=>{
    if (err) throw err;
    console.log("File has been deleted");
})