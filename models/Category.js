const Sequelize = require("sequelize");
const connection = require("../database/Connection");


const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


//Usar o 'sync' para crear a tabela no banco de dados
//Category.sync({force : true});

module.exports = Category;