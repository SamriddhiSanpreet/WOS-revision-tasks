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

// sequelize.sync({ force: true, match: /_san$/ }); // showing an error 

const User = sequelize.define('user',{
    user_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[4,6] 
        }
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

// console.log(sequelize.models.user);
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

User.sync({alter:true}).then(()=>{  // Using the force and alter is same but the 
    // const user = User.build({username:'Sam',password:'123',age:'20',sam_san:true});
    // // console.log(user.username);
    // user.username='Ashu';

    return User.bulkCreate([
        {
        username:'Krushi',
        password:'0000',
        age:19,
        // sam_san:false
    },{                                // it will not show any validation error because of the bulk we are using...

        username:'samriddhi',
        password:'5555',
        age:25,
    },
    {
        username:'AshutoshSamriddhi'
    }
],
{validate:true}) // using for bulkCreate query because as normal only the single data will show such validation as mentioned above but in the bulkCreate data this validate:true will work because it is the collection of the data.

    // return User.create(
    // {
    //     username:'Samriddhi'
    // })
    .then((data)=>{
        // console.log("User added to database successfully !!");
        // console.log(data.toJSON());
        // data.username = 'pizza';
        // data.age = 20;
        // data.decrement({age:2});
        // data.increment({age:2,height:3});

        // return data.save();
        // return data.destroy();
        // return data.reload();
        // return data.save({fields:['age']})  // only the age will save and as a result the age will be same but the previous username will be shown
        data.forEach((element)=>{
            console.log(element.toJSON());
        })

    })
    .then((data)=>{
        // console.log("User Updated !!");
        // console.log(data.toJSON());
        

    });
    // .then((data)=>{
    //     console.log("User Updated !!");
    //     console.log(data.toJSON());
    // })
    // user.save(); // used to save the data to the database
    // console.log("Table and model synced successfully !!");
}).catch((err)=>{
    console.log("Something wrong",err);
})