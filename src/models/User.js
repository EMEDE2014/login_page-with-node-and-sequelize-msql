
const Sequelize = require('sequelize');



const ConnectionDb = require('./ConnectionDb');
const User = ConnectionDb.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.CHAR,
        allowNull: false
    },

});

module.exports = User;