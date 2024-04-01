const sequelize=require('../util/database');

const Sequelize=require('sequelize');

const User=sequelize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING,
    }
})



module.exports=User;