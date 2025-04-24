const express = require('express');
const port = 8000;
const app = express();
const morgan = require('morgan');
const os = require('os');
const totalcpu = os.cpus().length;
const cluster = require('cluster');

// Cluster

if(cluster.isPrimary){
    for(var i=0; i<=totalcpu; i++){
        cluster.fork();
    }
    return;
}

// package for maintaining the log file

    app.use(morgan('combined'));

// Custom Middleware

// app.use((req,res,next)=>{
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
    
// })

app.get('/', (req,res)=>{
    return res.send(`Hello Sam ${process.pid}`);
})

app.get('/about',(req,res)=>{
    return res.send("About Sam");
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
})



// cluster,maintain log files of every request,