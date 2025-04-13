const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  userId: { // Defining foreign key
    type: DataTypes.INTEGER,
    allowNull: false, // Not null if required
  },
});

// User has many Products, Product belongs to User
User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

module.exports = Product;
