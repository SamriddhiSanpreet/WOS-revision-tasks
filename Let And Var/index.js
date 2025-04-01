const express = require('express');
const port = 8000;
const app = express();

// Example-1 (Hoisting in Node.js)

// //var

// console.log(a);
// var a=5;
// console.log(a);

// //let

// console.log(b);
// let b=5;
// console.log(b);

//Example-2 ( Block Scope with let and var in Node.js)

// if(true){
//     let a =10  // Block-scoped
//     var b =80  // Function-scoped
// }

// console.log("A = ",a);  // Uncaught ReferenceError: a is not defined (a is block-scoped)
// console.log("B = ",b);  // 80

// Example-3 (Re-declaration in Node.js)

// var

// var a=10;
// var a=50;
// console.log(a); //50

// // let

// let b=10;
// let b =70;
// console.log(b); // SyntaxError

// Example-4 (Loop Example with let and var in Node.js)

// var

// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);  // Prints 3 three times because var is function-scoped
//     }, 1000);
// }

// let

// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);  // Prints 0, 1, 2 because let is block-scoped
//     }, 1000);
// }

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = "+port);
})
