const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
const sequelize = new Sequelize('associations_seq','root','12345',{
    dialect:'mysql'
});

const Country = sequelize.define('country',{
    countryName:{
        type:DataTypes.STRING,
        unique:true
    }
},{
    timestamps:false
});

const Capital = sequelize.define('capital',{
    capitalName:{
        type:DataTypes.STRING,
        unique:true
    }
},{
    timestamps:false
});

// Country.hasOne(Capital,{foreignKey:'countryKiId'});  // you can change the name of the foreign key according to yourself by using this method

// Country.hasOne(Capital, {foreignKey: {
//     name: 'countryKiId',
//     type:DataTypes.INTEGER,
//     allowNull: false
// }});
// Country.hasOne(Capital);
// Capital.belongsTo(Country);

// Country.hasOne(Capital,{onDelete:'CASCADE'});
// Capital.belongsTo(Country,{onDelete:'CASCADE'});

Country.hasOne(Capital,{onUpdate:'CASCADE'});
Capital.belongsTo(Country,{onUpdate:'CASCADE'});

let country,capital;

sequelize.sync({alter:true}).then(()=>{

    // To enter the data in table usoing bulkCreate method

    // Country.bulkCreate([
    //     {
    //        countryName: 'India'
    //     },
    //     {
    //         countryName: 'Korea'
    //     },{
          
    //         countryName: 'China'
    //     },
    //     {
    //         countryName: 'Australia'
    //     }
    // ]);

    // Capital.bulkCreate([
    //     {
    //         capitalName: 'Delhi'
    //     },
    //     {
    //         capitalName: 'Seoul'
    //     },
    //     {
    //         capitalName: 'Beijing'
    //     },
    //     {
    //         capitalName: 'Canberra'
    //     }
    // ]);

    // return Capital.findOne({where:{capitalName:'Canberra'}});
    // return Country.findOne({where:{countryName:'Australia'}});
    // return Country.create({
    //     countryName:'New Zealand'
    // });
    // return Country.findOne({where:{countryName:'India'}});
    // return Country.destroy({where:{countryName:'New Zealand'}});
    // return Country.findOne({where:{countryName:'Korea'}});
    return Country.findOne({where:{countryName:'Korea'}});


    

 // these are use to set the data means the code is used to enter the id ofcountry in capital to recognize
        // }).then((data)=>{
        //     capital = data;
        //     return Country.findOne({where:{countryName:'Australia'}});
        // }).then((data)=>{
        //     country = data;
        //     country.setCapital(capital);
        // })

// these code is used to show the data which get connected through id and in capital there is showing the id of their country .
        }).then((data)=>{
            country = data;
            // // return country.getCapital();  
            // return country.createCapital({
            //     capitalName:'Auckland'  
            // });
            return Capital.findOne({where:{capitalName:'Seoul'}});
            // console.log(data);

        })
        .then((data)=>{
            // console.log(data.toJSON());
            capital = data;
            // return capital.setCountry(country);
            return country.setCapital(capital);
        })
        .then((data)=>{
            console.log("======",data);
        })
        .catch((err)=>{
            console.log(err);
        })

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((err)=>{
    console.error('Unable to connect to the database:',err);
});



// i have to practise the topic called include keyword with one one 