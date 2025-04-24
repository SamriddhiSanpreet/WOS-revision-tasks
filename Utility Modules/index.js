const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const fs = require('fs');

// Example-1

// const fl = fs.readFile('info.txt','utf-8',async (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });;
// console.log(fl);

// Example-2

// fs.writeFileSync('test.txt',"Hey Sam , what's up ");

// const data = fs.readFileSync('test.txt','utf-8');
// console.log(data);




app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Your server is running on the port = ",port);
    }
})