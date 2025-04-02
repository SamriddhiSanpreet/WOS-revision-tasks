const express = require('express');
const port = 8000;
const app = express();
const status = require('express-status-monitor');
const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('info.txt');
const writeStream = fs.createWriteStream('copy.txt');

app.use(status());

// app.get('/',(req,res)=>{
//     fs.readFile('info.txt','utf8',(err,data)=>{
//         if(err){
//             console.log(err);
//             return false;
//         }
//         res.send(data);
//     })
// })

// Example-1 (Using Streams) 

// app.get('/',(req,res)=>{
//     const stream = fs.createReadStream('info.txt','utf8');
//     stream.on('data',(chunk) => res.write(chunk));
//     stream.on('end',()=>res.end());
// })

// Example-2 (Zip using Streams)

// fs.createReadStream('info.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('info.zip')));

// Example-3 (Using pipe)

// readStream.pipe(writeStream).on('error',console.error); // it will create a file which you have named in writeStream.

process.stdin.pipe(writeStream);


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
})