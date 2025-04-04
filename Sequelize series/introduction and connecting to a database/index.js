const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_connection','root','12345',{
    dialect:'mysql',
    // define:{
    //     freezeTableName: true,
    // }
}) ;

// sequelize.authenticate().then(()=>{
//     console.log("Connection Successful");
// }).catch((err)=>{
//     console.log("Error connectivity to database!!",err);
// })



// sequelize.drop({ match: /_san$/i });  // its deprecated right now so intead of this you have to use sequelize.dropTable() or force:true method.


const User = sequelize.define('user',{
    user_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.DataTypes.STRING,
    },
    age:{
        type: Sequelize.DataTypes.INTEGER,
        defaultValue:21,
    },
    sam_san:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue:true
    }
},
{
    freezeTableName:true //when we use this method then it means we don't want to plural our table name . suppose i haven't use this method and given my model name user then when we run and see in our mysql the the model will create but the name of the model changes to users which means it is the default behaviour of mysql to plural the table name.
}
);

console.log(sequelize.models.user);
// User.drop();


// User.sync({force:true}).then((data)=>{   // Using the force method we are saying to run the code forcely.
//     console.log("Table and model synced successfully !!",data);
// }).catch((err)=>{
//     console.log("Something wrong");
// }) 

// User.sync({alter:true}).then((data)=>{  // Using the force and alter is same but the 
//     console.log("Table and model synced successfully !!",data);
// }).catch((err)=>{
//     console.log("Something wrong");
// })