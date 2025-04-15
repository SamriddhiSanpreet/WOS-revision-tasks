const Sequelize = require('sequelize');
const sequelize = new Sequelize('role_based_pr','root','12345',{
    dialect:'mysql'
});

sequelize.sync({alter:true}).then(()=>{
    console.log("Your sequelize is running!!");
}).catch((err)=>{
    console.log(err);
})

module.exports = sequelize;