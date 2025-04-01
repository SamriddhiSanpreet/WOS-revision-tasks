const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');

// Synchronous

// Example-1 (Reading a File Synchronously)

// console.log("Start");
// let data = fs.readFileSync('readme.md','utf8');
// console.log("Data = ",data);
// console.log("End");

//Example-2 (Synchronous Timeout)

// console.log("Start Timeout...");
// let time = Date.now();
// while(Date.now()-time<5000){

// }
// console.log("Timeout finished after 2 sec...");

// Example-3 (Synchronous File Write)

// fs.writeFileSync('readme.md','Hey Samriddhi','utf8');
// console.log("File has been updated...");


// Asynchronous

// Example-1 (Reading a File Asynchronously)

// console.log("start");
// fs.readFile('readme.md','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("Your Info :- ",data);
// })
// console.log("End");

// Example-2 (Asynchronous Timeout with setTimeout)

// console.log("Start");
// setTimeout(()=>{
//     console.log("Sam");
// },5000);
// console.log("End");

// Example-3 (asynchronous File Write) 

console.log("Start Updating...");
fs.writeFile('readme.md','This is the asynchrounous File updating ... Hey Sam','utf8',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your Data Has been Updated Asynchronously...");
})
console.log("This will print before the data has been updated!!");

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = "+port);
})