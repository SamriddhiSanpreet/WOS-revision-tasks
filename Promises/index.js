const express = require('express');
const port = 8000;
const app = express();

// Example-1 

// function fetchData(){
//     return "Welcome Samriddhi";
// }
// const myPromise = new Promise((resolve,reject)=>{
    
//     var data = fetchData();

//     if(data){
//         resolve(data);
//     }
//     else{
//         reject(new Error("Data is not found !!"));
//     }

// })

// myPromise
//     .then((result) =>{
//         console.log("Here is the result : ",result);
//     }).catch((error) => {
//         console.error('Error : ',error);
//     })

// Example-2
    
//   fetch('https://jsonplaceholder.typicode.com/posts')

//   .then((data) =>{
//     console.log(data);
//   }).catch((error)=>{
//     console.log(error);
//   })

// Example-3 (Pending)

// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Mission Succesfull !!");
//     },1000);
// })

// console.log("Mission = Pending 😤");

// Example-4 (Resolved)

// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Successful 😛");
//     },3000);
// })

// mypromise.then((result)=>{
//     console.log("Mission : ",result);
// })

// Example-5 (Rejected)

const mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Failed 😭");
    },3000);
})

mypromise.catch((error)=>{
    console.error("Mission = ",error);
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
})