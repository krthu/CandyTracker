const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Backend/Config/database.sqlite'
});


module.exports = { sequelize, DataTypes};