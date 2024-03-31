const sequelize=require('../util/database');

const Sequelize=require('sequelize');

const User=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type:Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type:Sequelize.BIGINT,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    }
});


module.exports=User;

