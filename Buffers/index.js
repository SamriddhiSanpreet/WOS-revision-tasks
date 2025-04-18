const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');

// Example-1 (Creating a Buffer) 

// var buff = Buffer.from('Samriddhi'); // from is used to adding the data.
// console.log("Simple Method => ",buff); // it results the characters in hexa decimal value.
                // OR 
// var buff = Buffer.from([1,2,3]);
// console.log(buff);
                // OR 
// var buff = Buffer.from('Sam');
// var buff1 = Buffer.from('1a7','hex'); //  data truncated when data ends in single digit ('7')
// var buff2 = Buffer.from('Sam1235','latin1');
// console.log("Buff = ",buff);
// console.log("Buff1 = ",buff1);
// console.log("Buff2 = ",buff2);

// Example-2 (Using toJSON key method) 

// var buff = new Buffer.from('Samriddhi');
// console.log("JSON => ",buff.toJSON()); // it results the characters in decimal numbers.

// Example-3 (using alloc method)

// var buff = Buffer.alloc(10); // print <Buffer 00 00 00 00 00 00 00 00 00 00>
// console.log(buff); // it creates a buffer of size according to the given number bytes.
            // OR 
// var buff = new Buffer.alloc(10,5); // print <Buffer 05 05 05 05 05 05 05 05 05 05>
// console.log(buff);

// Example-4 (using toString method) 

// var buff = new Buffer.from('Samriddhi');
// console.log("String => ",buff.toString()); // it prints the string which you have written such as i have written Samriddhi then it also prints Samriddhi.
            // OR 
// console.log("String => ",buff.toString('hex'));

// Example-5 (using write method) 

// var buff = new Buffer.from('Samriddhi');
// buff.write('khushi');
// console.log("Using toString And write Method => ",buff.toString()); // prints  Khushidhi because buffers have limited memory thats why when i write 6 characters in it then it overwrites the first 6 characters from Samriddhi and as a resultes it showed khushidhi.

// Example-6 (Manipulating a Buffer) 

// const buffer = Buffer.from('Hello, world!');

// // Get a slice of the buffer
// const slice = buffer.slice(0, 6); // Extract the first 5 bytes
// console.log(slice.toString()); // Output: Hello

// // Convert the buffer to a string
// const string = buffer.toString();
// console.log(string); // Output: Hello, world!

// // Convert the buffer to a JSON string
// const json = buffer.toJSON();
// console.log(json); // Output: { type: 'Buffer', data: [ 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33 ] }

// Example-7 (Reading a file) 

// fs.readFile('info.txt', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // 'data' is a Buffer containing the image data
  // console.log("Length Of the Data => ",data.length); // Print the size of the image in bytes
//   // You can now use the buffer for further processing, like sending it as a response
// });

// Example-8
// to encode and decode the data.

// const buff = Buffer.from('I love Node.js');
// console.log("Original message => ",buff.toString());
// console.log("Encode message => ",buff.toString('base64'));
// console.log("Decode message => ",buff.toString('utf-8'));

// Example-9
// to replace the script in javascript to node js as result it will show JavaNode.js

// const buff = Buffer.from('JavaScript');
// const sliceBuf = buff.slice(0,4);    
// const extra = Buffer.from('Node.js');
// const concatBuf = Buffer.concat([sliceBuf,extra]);

// console.log(concatBuf.toString());

// Example-10

// const buff = Buffer.from('Hello World');
// const rev1 = buff.slice(0,6);
// const rev2 = buff.slice(6,11);                // to reverse the hello world to world hello.
// const rev = Buffer.concat([rev2,rev1]);
// console.log(rev.toString());

// Example-11

// const buff = Buffer.alloc(5);
// const isEmpty = buff.every(bytes => bytes === 0);  // to check that the in buffer all the bytes are 0 or not.
// console.log(isEmpty);

// Example-12
// creates a new file and write the message which you want to show

// // const fs = require('fs');
// const buff = Buffer.from('Hello from buffer!');   
// fs.writeFileSync('output.txt', buff);



app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = "+port);
})