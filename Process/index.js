
// process.beforeExit()

    // process.on('beforeExit',()=>{
    //     console.log("Hey wait there is an another task !!");

    //     for(var i=0 ; i<=10 ; i++){
    //         console.log(i);
    //     }
    //     console.log("Bye Bye");
    // })
    // console.log("Hello Sam");


// process.disconnect()

    // const {fork} = require('child_process');

    // // forking the child.js
    // const child = fork('./child');

    // // Parents get the message from the child
    // child.on('message',(msg)=>{
    //     console.log("Parent Received the Message : ",msg);
    //     setTimeout(()=>{
    //         // Parents send the message to the child
    //         child.send("Hey Child I'm your Mommy 😎");
    //     },2000)
    // })

    // // Parents gets disconnect event
    // child.on('disconnect',()=>{
    //     console.log("Child Disconnected.... !! 😤");
        
    // })

// process.exit()

    // console.log("Dekh exit abhi start ho gya ");
    // process.exit(1);
    // console.log("Ab ye message tujhe kabhi nhi dikhega");

// process.message()

    // const {fork} = require('child_process');

    // // forking the child.js
    // const child = fork('./child');

    // // Parents get the message from the child
    // child.on('message',(msg)=>{
    //     console.log("Bestie Received the Message : ",msg);
    // })

    // child.send("Good Bro");  

// process.uncaughtException()

    // process.on('uncaughtException',(err)=>{
    //     console.log("Error Caught => ", err.message);
    // })
    // console.log(x);

// process.env()

    // require('dotenv').config();
    // console.log("Name = ",process.env.my_name);
    // console.log("Password = ",process.env.my_pass);
    // console.log("Age = ",process.env.my_age);
