let yargs = require("yargs")
let commands = require("./commands");


let command = yargs.argv._[0];
let title = yargs.argv.title;
let body = yargs.argv.body;


if(command=="add"){
    if(title && body){
        commands.add(title,body);
    }else{
        console.log("Please provide both title and body.");
    }
}
else if(command=="read"){
    commands.read();
}
else if(command=="list"){
    commands.list();
}
else if(command=="delete"){
    if(title){
        commands.deleteNotes(title);
    }else{
        console.log("Please provide title");
    }
}
else if(command=="update"){
    if(title && body){
        commands.update(title,body);
    }else{
        console.log("Please provide both title and body.");
    }
}
else{
    console.log("pls enter a valid command!");
}
