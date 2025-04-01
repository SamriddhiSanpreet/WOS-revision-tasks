const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');
const http = require('http');

// Example-1 (Using File System Operations)

fs.readFile("readme.md","utf8",(err,data)=>{
    if(err){
        console.log("This is the File Error : ",err);
        return false;
    }
    console.log("Contents : ",data);
})

// Example-2 (Using Timers)

setTimeout(()=>{
    fs.readFile("readme.md","utf8",(err,data)=>{
        if(err){
            console.log("This is the File Error : ",err);
            return false;
        }
        console.log("Contents : ",data);
    })
},5000);

// Example-3 (Using HTTP)

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Hey Sam');
})

server.listen(8001,()=>{
    console.log("See Your Server !!");
})


app.get('/',(req,res)=>[
    res.send("Hello Everyone !!!!!!")
])

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
    
})