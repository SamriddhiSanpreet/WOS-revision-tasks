const Product = require('../models/productModel');

module.exports.addProduct = async(req,res)=>{
    try{
        const {productName,price} = req.body;
        const product = await Product.create({productName,price});
        res.send(product);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.getProduct = async(req,res)=>{
    try{
        const product = await Product.findAll();
        res.send(product);
    }
    catch(err){
        console.log(err);
    }
}