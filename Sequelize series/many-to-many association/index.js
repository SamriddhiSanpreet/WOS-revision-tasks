const Sequelize = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const {DataTypes,Op}=Sequelize;
const sequelize = new Sequelize('associations_seq','root','12345',{
    dialect:'mysql'
});

const Customer = sequelize.define('customer',{
    customerName:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});


const Product = sequelize.define('product',{
    productName:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

const CustomerProduct = sequelize.define('customer_product',{
    customerProductId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
},{
    timestamps:false
})
    

Customer.belongsToMany(Product,{
    through:'customer_product', 
    // foreignKey:'customer_id'
});
Product.belongsToMany(Customer,{
    through:'customer_product',
    // foreignKey:'product_id'
});


sequelize.sync({alter:true}).then(()=>{
    //  Customer.bulkCreate([
    //     {customerName:'customer1'},
    //     {customerName:'customer2'},
    //     {customerName:'customer3'},
    //     {customerName:'customer4'},
    //     {customerName:'customer5'},
    //     {customerName:'customer6'},
    //     {customerName:'customer7'},
    //     {customerName:'customer8'},
    //     {customerName:'customer9'},
    //  ])

    //  Product.bulkCreate([
    //     {productName:'product1'},
    //     {productName:'product2'},
    //     {productName:'product3'},
    //     {productName:'product4'},
    //     {productName:'product5'},
    //     {productName:'product6'},
    //     {productName:'product7'},
    //     {productName:'product8'},
    //     {productName:'product9'},
    //  ])

    // return Customer.findOne({where:{customerName:'customer1'}})
    // return Product.findOne({where:{productName:'product1'}})
    return Customer.destroy({where:{customerName:'customer1'}})

})
.then((data)=>{
    // customer = data;
    // product = data;
    // return Product.findAll()
    // return Customer.findAll()
    console.log(data);
    
})
// .then((data)=>{
//     // product = data;
//     customer = data;
    // customer.addProducts(product);
    // product.addCustomers(customer)
// })
.catch((err)=>{
    console.log(err);
});



// ********* Process  **************

// process.beforeExit()
// process.disconnect()
// process.exit()
// process.message()
// process.uncaughtException()
// process.env()

// Read kar lenaa