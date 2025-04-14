const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
const sequelize = new Sequelize('associations_seq','root','12345',{
    dialect:'mysql'
});

const User =  sequelize.define('user',{
    username:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    }
},{
    timestamps:false
});


const Post = sequelize.define('post',{
    message:{
        type:DataTypes.STRING,
    }
},{
    timestamps:false
});


User.hasMany(Post,{onDelete:'CASCADE'});
Post.belongsTo(User,{onDelete:'CASCADE'});

let user,posts;

sequelize.sync({alter:true}).then(()=>{
//   User.bulkCreate([
//     {
//         username:'Sam',
//         password:'1234'
//     },{
//         username:'Khushi',
//         password:'11111'
//     },
//     {
//         username:'Akansha',
//         password:'22222'
//     },
//     {
//         username:'Kriti',
//         password:'33333'
//     }
//   ])

//   Post.bulkCreate([
//     {
//         message:'Sam is fantastic',
//     },
//     {
//         message:'Sam is great',
//     },
//     {
//         message:'Sam is good',
//     },
//     {
//         message:'Sam is beautiful',
//     },
//     {
//         message:'Sam is gorgeous',
//     },
//     {
//         message:'Sam is an angle',
//     },
//     {
//         message:'Sam is lovely',
//     },
//     {
//         message:'Sam is inspiration',
//     }
//   ])
//   
    // return User.findOne({where:{username:'Sam'}});
    // return User.destroy({where:{username:'Sam'}});
    return User.findOne();

})
.then((data)=>{
     user = data;
    //  return Post.findAll();
    // return user.countPosts();
    return Post.findOne();
}).then((data)=>{
    posts = data;
    // return user.addPosts(posts);
    // return user.removePost(posts);
    posts.setUser(user);
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})