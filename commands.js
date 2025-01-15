let fs = require("fs")

const add = (title,body)=>{
   let myNotes = [];
   try{
    myNotes =  JSON.parse(fs.readFileSync('notes.json'))
   }catch(e){
    console.log(e);
   }

   let index = myNotes.findIndex((x)=>x.title==title);

   if(index==-1){
    myNotes.push({title,body});
    console.log(myNotes);
   }else{
    console.log(myNotes);
   }
   fs.writeFileSync('notes.json',JSON.stringify(myNotes));
}


const read = ()=>{
    let myNotes = [];
    try{
        myNotes = JSON.parse(fs.readFileSync('notes.json'));
    }catch(e){
        console.log(e);
    }
    console.log(myNotes);
}


const list = ()=>{
    let myNotes = [];
    try{
        myNotes = JSON.parse(fs.readFileSync('notes.json'))
    }catch(e){
        console.log(e);
    }
    if(myNotes.length>0){
        myNotes.forEach(note=>{
            console.log(note.title);
        })
    }else{
        console.log("No notes found");
    }
}


const deleteNotes = (title)=>{
    let myNotes = [];
    try{
        myNotes = JSON.parse(fs.readFileSync('notes.json'))
    }catch(e){
        console.log(e);
    }
    let newNotes =  myNotes.filter((x)=>x.title!==title);
    fs.writeFileSync('notes.json',JSON.stringify(newNotes));
}

const update = (title,body)=>{
    let myNotes = [];
    try{
        myNotes = JSON.parse(fs.readFileSync('notes.json'))
    }catch(e){
        console.log(e);
    }
    let index = myNotes.findIndex((x)=>x.title==title);

    if(index!==-1){
        myNotes[index].body = body;
        fs.writeFileSync('notes.json',JSON.stringify(myNotes));
    }else {
        console.log(`Note with title "${title}" not found.`);
    }

}

module.exports = {add,read,list,deleteNotes,update};