const express = require('express');
const port = 8000;
const app = express();

// Example-1 (using global keyword)

global.a = "Hey, This is Sam";

console.log(global.a);

// Example-2 (using console keyword)

console.log("Hey Sam🖐️🖐️");
console.warn("Don't Touch ❌");
console.error("Mission : Faliled 😔");
console.debug("Error : SyntaxError ⚠️");
const A = [
    {id:1,name:'Sam',age:20},
    {id:2,name:'Khushi',age:18},
    {id:3,name:'Sindhuja',age:10}
]
console.table(A);
console.time("Loop Time"); // message should be same in console.time and console.timeEnd.
for(var i=0;i<50;i++){
    }
console.timeEnd("Loop Time");

// Example-3(using process keyword)

console.log("Here are the System Details below :- ");
console.log("Product ID = ",process.pid);
console.log("NodeJS Version = ",process.version);
console.log("Command-line Argument = ",process.argv);
console.log("Platform = ",process.platform);
console.log("Processor Architecture = ",process.arch);
console.log("Process Uptime = ",process.uptime(),"seconds");
console.log("Current Working Directory = ",process.cwd());
console.log("Memory Usage = ",process.memoryUsage());

// Example-4 (using __dirname and __filename keyword)

console.log("Directory Name : ",__dirname);
console.log("File Name : ",__filename);

// Example-5 (using timers keywords)

const abortFun = () =>{
    var i = 0;

    // setInterval

    setInterval(() => {
        i += 5;
        console.log(`Executed after ${i} seconds...`);
    }, 1000);

    // setTimeout

    setTimeout(()=>{
        console.log("Abort after 5 seconds...");
        return process.abort();
    },9000)
}

abortFun();

// Example-6 (using buffer keyword)

var buff = new Buffer.from("Sam using Buffer...");
console.log(buff.toString());

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = "+port);
})