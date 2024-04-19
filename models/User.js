const Sequelize = require("sequelize");
const connection = require("../database/Connection");


const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Usar o 'sync' para crear a tabela no banco de dados
//User.sync({force : true});

module.exports = User;