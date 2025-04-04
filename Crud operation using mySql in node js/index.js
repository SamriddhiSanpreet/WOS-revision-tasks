const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const db = require('./config/db');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',require('./routes/customerRoutes'));
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.listen(port,(err)=>{
    err?console.log(err):console.log("Your server is running on the port = ",port);
})