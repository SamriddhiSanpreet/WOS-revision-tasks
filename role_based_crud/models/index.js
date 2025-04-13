const sequelize = require('../config/db');
const User = require('./user');
const Product = require('./product');

sequelize.sync({ force: false }) // pehli baar force true rakh sakte ho agar table nayi banana ho
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.log(err));

module.exports = { User, Product };
