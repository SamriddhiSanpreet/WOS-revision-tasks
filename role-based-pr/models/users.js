const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');


const User = sequelize.define('User',{
    name :{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    },
    role:{
        type:DataTypes.STRING,
    },
    
})

module.exports = User;