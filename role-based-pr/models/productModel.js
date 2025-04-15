const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const User = require('./users')


const Product = sequelize.define('Product',{
    productName :{
        type:DataTypes.STRING,
    },
    price:{
        type:DataTypes.STRING,
    },
})

User.hasMany(Product)
Product.belongsTo(User)


module.exports = Product;