
// // Child proces started
// console.log("Child process started : ");

// Child send inital message to the parent 
process.send("Hey Bestie how are you ?? ");

// // Child gets the message from the parent
process.on('message',(msg)=>{
    setTimeout(()=>{
        console.log("Bro Received the Message : ",msg);
    },2000)
})

// // After message is received the child disconnected after the short delay
// setTimeout(()=>{
//     console.log("Child life is done . Disconnecting..... !!");
//     process.disconnect();
// },5000);