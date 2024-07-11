const {sequelize, DataTypes } = require('../Config/Database');
const Candy = require('./Candy')


const ExpiryDate = sequelize.define('ExpiryDate', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    
    }
}, {
    timestamps: true

});

Candy.hasMany(ExpiryDate, {onDelete: 'CASCADE'});
ExpiryDate.belongsTo(Candy);

module.exports = ExpiryDate