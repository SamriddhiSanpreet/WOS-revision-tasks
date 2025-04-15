const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/db')

// app.use(require('./models/users'))
// app.use(require('./models/productModel'))
app.use(express.json());
app.use(express.urlencoded());
app.use('/',require('./routes/addProduct'))
app.use('/',require('./routes/addUser'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("Your server is running on the port = ",port);
})