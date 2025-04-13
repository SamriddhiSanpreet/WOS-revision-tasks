const Sequelize = require('sequelize');
const sequelize = new Sequelize('role_based_crud','root','12345',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = sequelize;