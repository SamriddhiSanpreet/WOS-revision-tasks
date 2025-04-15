const Sequelize = require('sequelize');
const {DataTypes} = Sequelize;
const port = 3000;
const express = require('express');
const app = express();
const sequelize = new Sequelize('association_task','root','12345',{
    dialect:'mysql'
})

const Student = sequelize.define('student',{
    name:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER
    },
    class:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:false
})


const Course = sequelize.define('course',{
    courseName:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
})

const Enrollment = sequelize.define('enrollment',{
    enrollmentId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
},{
    timestamps:false
})

Student.belongsToMany(Course,{through:Enrollment});
Course.belongsToMany(Student,{through:Enrollment});

let course,student;

sequelize.sync({alter:true}).then(()=>{
    return Course.findOne({where:{courseName:'History'}})
    
})
.then((data)=>{
    courseInstance = data;
    return Student.findOne({where:{name:'Cassy'}});
})
.then((data)=>{
    studentInstance = data;
    return courseInstance.addStudent(studentInstance);
})
.then((data)=>{
   console.log(data);
})
.catch((err)=>{
    console.log(err);
})