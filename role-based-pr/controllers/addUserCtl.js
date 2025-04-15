const User = require('../models/users');

module.exports.addUser = async(req,res)=>{
    try{
        const {name,email,password,role} = req.body;
        const user = await User.create({name,email,password,role});
        res.send(user);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.getUsers = async(req,res)=>{
    try{
        const users = await User.findAll();
        res.send(users);
    }
    catch(err){
        console.log(err);
    }
}