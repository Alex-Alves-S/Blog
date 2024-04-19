const Sequelize = require("sequelize");

const connection = new Sequelize('db_blog','root','98532',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;