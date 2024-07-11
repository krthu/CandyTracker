const app = require('./App.js');
const { sequelize } = require('./Config/Database')


sequelize.sync()
    .then(() => {
        console.log("Datbase & Tables created!")
    })
    .catch((err) => {
        console.error('Unable to create database & tables:', err);
    });