const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');
const http = require('http');

// // Example-1 (Using File System Operations)

// fs.readFile("readme.md","utf8",(err,data)=>{
//     if(err){
//         console.log("This is the File Error : ",err);
//         return false;
//     }
//     console.log("Contents : ",data);
// })

// // Example-2 (Using Timers)

// setTimeout(()=>{
//     fs.readFile("readme.md","utf8",(err,data)=>{
//         if(err){
//             console.log("This is the File Error : ",err);
//             return false;
//         }
//         console.log("Contents : ",data);
//     })
// },5000);

// // Example-3 (Using HTTP)

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type' : 'text/html'});
//     res.end('Hey Sam');
// })

// server.listen(8001,()=>{
//     console.log("See Your Server !!");
// })

// app.get('/',(req,res)=>[
//     res.send("Hello Everyone !!!!!!")
// ])

// Example-4

// function displayResult(result,callback){
//     console.log("Result : ",result);
//     callback();
// }

// function thankyou(){
//     console.log("Thank you for using our service!");
// }

// displayResult('sam',thankyou);

// Example-5

// function processNumbers(arr, callback) {
//     let doubledArray = arr.map(num => num * 2); // map use kiya easy karne ke liye
//     callback(doubledArray);
// }

// function printArray(arr) {
//     console.log("Doubled Array:", arr);
// }

// processNumbers([1,2,3,4,5], printArray);


// Example-6

// function times(){
//     setTimeout(()=>{
//         console.log("hey Sam");
//     },2000)
// }

// times();

// Example-7

// function askQuestion(question, callback) {
//     console.log(question);
//     callback();
// }

// function answers(){
//     console.log("my name is sam")
// }

// askQuestion("what is your name",answers);

// Example-8

// function calculator(a,b,callback){
//     console.log("a = ",a);
//     console.log("b = ",b);
//     callback(a,b);
// }

// function add(a,b){
//     console.log("Addition = ",a+b);
// }

// function sub(a,b){
//     console.log("Subtraction = ",a-b);
// }

// function mul(a,b){
//     console.log("Multiplication = ",a*b);
// }

// function div(a,b){
//     console.log("Division = ",a/b);
// }

// calculator(10,20,add);


// Example-9

// function stepOne(callback){
//     setTimeout(()=>{
//         console.log("B1 => Hey Sam\n");
//         callback();
//     },1000)
// }

// function stepTwo(callback){
//     setTimeout(()=>{
//         console.log("B1 => What are you doing\n",);
//         callback();
//     },1000)
// }

// function stepThree(callback){
//     setTimeout(()=>{
//         console.log("B3 => Will you go with me to buy some groceries.\n",);
//     },1000)
// }

// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree()
//     })
// })

// Example-10

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log("Data Received !!");
//         callback();
//     },2000)
// }

// function processData(){
//     console.log("Processing Data !!");
// }

// fetchData(()=>{
//     processData();
// })

// Example-11

// function filterEvenNumbers(arr,callback){
//     console.log(" Original Array => ",arr);
//     callback(arr);
// }

// setTimeout(()=>{
//     console.log("Processing...");
// },2000);

// function printEvenNumbers(arr){
//     setTimeout(()=>{
//         let num = arr.filter((arr)=> arr%2==0);
//         console.log("Even Numbers = ",num);
//     },4000)
// }

// filterEvenNumbers([1,2,3,4,5,6],printEvenNumbers);

// Example-12

// function Cooking(callback){
//     setTimeout(()=>{
//         console.log("Start Cooking !!");
//         callback();
//     },2000)
// }

// function Vegetables(callback){
//     setTimeout(()=>{
//         console.log("Cut Vegetables !!");
//         callback();
//     },2000)
// }

// function Water(callback){
//     setTimeout(()=>{
//         console.log("Boil Water !!");
//         callback();
//     },2000)
// }

// function Food(){
//     console.log("Food is Ready !!");
// }

// Cooking(()=>{
//     Vegetables(()=>{
//         Water(()=>{
//             Food()
//         })
//     })
// })

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
    
})