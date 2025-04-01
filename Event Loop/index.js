const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');

// Example-1 (Basic Understanding with setTimeout and setImmediate)

// console.log("Start");

// setTimeout(()=>{
//     console.log("SetTimeout");
// },0);

// setInterval(()=>{
//     console.log("setInterval");
// },5000);

// setImmediate(()=>{
//     console.log("setImmediate");
// },0);

// console.log("End");

// Example-2 (With setTimeout and fs.readFile)

console.log('Start');

setTimeout(()=>{
    console.log("Hello setTimeout");
},0)

fs.readFile("readme.md","utf8",(err,data)=>{
    setTimeout(()=>{
        console.log("Sam inside the fs with setTimeout");
    },0)
    setImmediate(()=>{
        console.log("Sam inside the fs with setImmediate");
    })
})

console.log("End");


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
})