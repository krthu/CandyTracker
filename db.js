const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Candy = sequelize.define('Candy', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true

});

const ExpiryDate = sequelize.define('Candy', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    
    }
}, {
    timestamps: true

});

Candy.hasMany(ExpiryDate, {onDelete: 'CASCADE'});
ExpiryDate.belongsTo(Candy);


sequelize.sync()
    .then(() => {
        console.log("Datbase & Tables created!")



    })
    .catch((err) => {
        console.error('Unable to create database & tables:', err);
    });

    module.exports = { sequelize, Candy, ExpiryDate };