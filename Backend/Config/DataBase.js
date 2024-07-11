const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Config/database.sqlite'
});


module.exports = { sequelize, DataTypes};