const Sequelize = require('sequelize');
const {DataTypes,Op} = Sequelize;
const sequelize = new Sequelize('sequelize_connection','root','12345',{
    dialect:'mysql',
    // define:{
    //     freezeTableName: true,
    // }
}) ;
const bcrypt = require('bcrypt');
const zlib = require('zlib');
const { type } = require('os');



// sequelize.authenticate().then(()=>{
//     console.log("Connection Successful");
// }).catch((err)=>{
//     console.log("Error connectivity to database!!",err);
// })



// sequelize.drop({ match: /_san$/i });  // its deprecated right now so intead of this you have to use sequelize.dropTable() or force:true method.

// sequelize.sync({ force: true, match: /_san$/ }); // showing an error 

const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[4,9] 
        },
        // get(){
        //     const rawValue = this.getDataValue('username');
        //     return rawValue.toUpperCase();
        // }
    },
    password:{
        type: DataTypes.STRING,
        // set(value){
        //     const salt = bcrypt.genSaltSync(12);
        //     const hash = bcrypt.hashSync(value,salt);
        //     this.setDataValue('password',hash);
        // }
        
    },
    age:{
        type: DataTypes.INTEGER,
        defaultValue:21,
        validate:{
            // isOldEnough(value){
            //     if(value<21){
            //         throw new Error("Too Young");
            //     }
            // }
            // isNumeric:{
            //     // msg:"You must enter something"

            // }
            isNumeric:true
        }
    },
    sam_san:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    description:{
        type:DataTypes.STRING,
        // set(value){
        //   const compressed = zlib.deflateSync(value).toString('base64');
        //   this.setDataValue('description',compressed);  
        // },
        // get(){
        //     const value = this.getDataValue('description');
        //     const uncompressed = zlib.inflateSync(Buffer.from(value,'base64')).toString();
        //     return uncompressed;
        //     // const uncompressed = zlib.inflateSync
        //     // (Buffer.from(value,'base64'));
        //     // return uncompressed;
        // }
    },
    aboutUser:{
        type:DataTypes.VIRTUAL,
        get(){
            return `${this.username} ${this.description}`;
        }
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        // validate:{
        //     // isEmail:true
        //     isIn:['me@sam.org','me@sam.com']
        // }
        allowNull:true,
        // validate:{
        //     isIn:{
        //         args:['me@sam.org','me@sam.com'],
        //         msg:'The provided email is not valid'
        //     },
        // }   
        validate:{
            myEmailValidator(value){
                if(value === null){
                    throw new Error("Please enter an email");
                }
            }
        }
    }
},
{
    freezeTableName:true ,//when we use this method then it means we don't want to plural our table name . suppose i haven't use this method and given my model name user then when we run and see in our mysql the the model will create but the name of the model changes to users which means it is the default behaviour of mysql to plural the table name.
    timestamps:true,
    paranoid:true,
    deletedAt:'TimeBarbaad',
    validate:{
        usernamePassMatch(){
           if(this.username === this.password) {
                throw new Error("Password can't be your username...");
           }
           else{
            console.log("Khushi");
           }
        }
    }
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

// function myFunction(){
//     console.log('running sql statement');
// }

User.sync({alter:true}).then(()=>{  // Using the force and alter is same but the 

    // const user = User.build({username:'Sam',password:'123',age:'20',sam_san:true});
    // // console.log(user.username);
    // user.username='Ashu';

//     return User.bulkCreate([
//         {
//         username:'Krushi',
//         password:'0000',
//         age:19,
//         // sam_san:false
//     },{                                // it will not show any validation error because of the bulk we are using...

//         username:'samriddhi',
//         password:'5555',
//         age:25,
//     },
//     {
//         username:'AshutoshSamriddhi'
//     }
// ],
// {validate:true}) // using for bulkCreate query because as normal only the single data will show such validation as mentioned above but in the bulkCreate data this validate:true will work because it is the collection of the data.

//     // return User.create(
//     // {
//     //     username:'Samriddhi'
//     // })
//     .then((data)=>{
//         // console.log("User added to database successfully !!");
//         // console.log(data.toJSON());
//         // data.username = 'pizza';
//         // data.age = 20;
//         // data.decrement({age:2});
//         // data.increment({age:2,height:3});

//         // return data.save();
//         // return data.destroy();
//         // return data.reload();
//         // return data.save({fields:['age']})  // only the age will save and as a result the age will be same but the previous username will be shown
//         data.forEach((element)=>{
//             console.log(element.toJSON());
//         })

//     })
//     .then((data)=>{
//         // console.log("User Updated !!");
//         // console.log(data.toJSON());
        

//     });
//     // .then((data)=>{
//     //     console.log("User Updated !!");
//     //     console.log(data.toJSON());
//     // })
//     // user.save(); // used to save the data to the database
//     // console.log("Table and model synced successfully !!");
// return User.findAll(); // it shows all the data 
// return User.findAll({attributes:['username','password']}); // it shows all username and password which i have mentioned to show in attributes.

// return User.findAll({attributes:[['username','myName'],['password','pass']]}); // nested array which shows the myName intead of username and pass instead of password.

// return User.findAll({attributes:[[sequelize.fn('AVG',sequelize.col('age')),'totalAge']]}); 

// return User.findAll({attributes: {exclude: ['password']}}); // it used to give all data except the password field.

// return User.findAll({attributes:['username'],where:{age:20,username:'Ashu'}}); // it will give the data whose age is 20 and with the name Ashu

// return User.findAll({limit:2}); show only two data becauseof the given limit.

// return User.findAll({order:[['age','DESC']]}); we will get the age in descending order.

// return User.findAll({
//     attributes:['username',[sequelize.fn('SUM',sequelize.col('age')),'totalAge']],   
//     group:'username'
// });

// return User.findAll({where:{
//     // [Op.or]:{username:'Ashu',age:20}
//     // [Op.and]:{username:'Ashu',age:20}
// }});

// return User.findAll({where: {username:'Ashu',age:'20'}
// });

// return User.findAll({where:{
//     // age:{
//     //     [Op.gt]:20 // its a greater than symbol operation.
//     // }
//     age:{
//         [Op.or]:{
//             [Op.lt]:20, // less than
//             [Op.eq]:null
//         }
//     }
// }});

// return User.findAll({where:
//     sequelize.where(sequelize.fn('char_length',sequelize.col('username')), 6) // whose username characters length will be 6 they will print out.
// });

// return User.update({username:'oreo'},{
//     where:{age:{
//         [Op.gt]:1
//     }}
// });

// return User.destroy({where:{username:'oreo'}});
// return User.destroy({truncate:true});
// return User.max('age');
// return User.sum('age',{where:{age:21}});
// return User.findAll({raw:true}); // give the needed data in json format
// return User.findAll({
//     where:{age:20},  // only age=20 data will show in json format.
//     raw:true,
// });

// return User.findByPk(32);
// return User.findOne(); // only first one data will show
// return User.findOne({where:{
//     age:{
//         [Op.or]:{
//             [Op.lt]:25, // less than
//             [Op.eq]:null   // equal to sign
//         }
//     }
// }});

// return User.findOrCreate({where:{username:'Ashu'}});
// return User.findOrCreate({
//     where:{
//         username:'Jerry'
// },
//     defaults:{
//             age:5
//         }
    
// });

// return User.findAndCountAll({
//     where:{username:'lilly'},
//     raw:true
// })

// return User.findOne();
// return User.create({
//     username:'Yashi',
//     password:'1435',
//     description:'This is the description its really long.'
// })

// return User.findOne({where:{username:'Yashi'}});
// return User.create({
//     username:'zindagi',
//     password:'life',
//     email:'l@gmail.com'
// });
// const user = User.build({email:'live'});
// return user.validate();
// return User.create({
//     username:'cema',
//     age:'5',
//     // email:'me@sam12.org'
//     password:'cema'
//     // email:null
// })
// return sequelize.query(`UPDATE user SET age=90 WHERE username='ashu'`)
// return sequelize.query(`select * from user`,{type:Sequelize.QueryTypes.SELECT})
// return sequelize.query(`update user set age = 20 where username ='ashu'`,{type:Sequelize.QueryTypes.UPDATE});
// return sequelize.query(`select * from user limit 2`,{model:User,plain:true});

// return sequelize.query(`select * from user limit 2`,{logging:myFunction})

// return sequelize.query(`select * from user where username :username`,{
//     replacements:{username:'mice'},
//     // plain:true
// });

// return sequelize.query(`select * from user where username IN(:username)`,{
//     replacements:{username:['mice','ashu']},
//     // plain:true
// });

// return sequelize.query(`select * from user where username like :username`,{
//     replacements:{username:'as%'},
//     // plain:true
// });

// return sequelize.query(`select * from user where username like :username`,{
//     replacements:{username:'as%'},
//     // plain:true
// });

return sequelize.query(`select * from user where username = ?`,{
    replacements:['sam'],
    // plain:true
});

// return sequelize.query(`select * from user where username = $username `,{
//     bind:{username:'sam'},
//     // plain:
//     // true
// });
// return sequelize.query(`select * from user where username = $1 `,{
//     bind:['sam'],
//     // plain:
//     // true
// });

// return User.destroy({
//     where:{id:5},
//     // force:true // it will forcely delete the data from your database.
// })

// return User.restore({
//     where:{id:5},
// })

// return sequelize.query(`select * from user `);
// return User.findAll();
// return User.findAll({where:{username:'krushi'}});
    


}).then((data)=>{
    // data.forEach((element)=>{
    //     console.log(element.toJSON());
    // })
    // console.log(data.toJSON());
    console.log(data);
    // const [result,created] = data;
    // // console.log(result.toJSON());
    // console.log(created);  // used to check that is data is created or not

    // const {rows,count} = data;
    // console.log(rows);
    // console.log(count);

    // console.log(data.username);
    // console.log(data.password);
    // console.log(data.description);
    // console.log(data.aboutUser);
    // [result,metadata]=data;
    // console.log(result);
    // console.log(metadata);

})
.catch((err)=>{
    console.log("Something wrong",err);
})

