const express = require('express');
const port = 8000;
const app = express();
const EventEmitter = require('events'); //EventEmitter is the class so according too the rules class is defined by camelcase.
const emitter = new EventEmitter();

// Example-1

// emitter.on('greet',(name)=>{ // on key is used to define something.
//     console.log(`Hey ${name}`);
// })

// emitter.emit('greet','Sam');  // emit key is used to introduce or call something.

// Example-2

// emitter.on('info', ({name,age})=>{
//     console.log(`Hey do you know that her name is ${name} and her age is ${age} but still you are asking`);
// })

// var obj = {name:'Sam',age:'20'};

// emitter.emit('info',obj);

// app.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("Your server is running on the port = "+port);
// })

//Example-3

var l1 = function l1(){
    console.log("Listener 1");
}

var l2 = function l2(){
    console.log("Listener 2");
}

emitter.addListener('connect',l1);
emitter.on('connect',l2);
emitter.emit('connect');
console.log("Number of listeners = "+ emitter.listenerCount('connect'));



