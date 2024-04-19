const Sequelize = require('sequelize');
const connection = require('../database/Connection');
const Category = require('../models/Category');

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.hasMany(Article); //Relacionamento de um para muitos
Article.belongsTo(Category); //Relacionamento de um para um


//Usar o 'sync' para crear a tabela no banco de dados
//Article.sync({force : true});

module.exports = Article;