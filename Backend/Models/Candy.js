const { sequelize, DataTypes } = require('../Config/Database');


const Candy = sequelize.define('Candy', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true

});

console.log("Yes Model Candy found!")

module.exports = Candy;