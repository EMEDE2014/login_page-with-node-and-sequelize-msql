const Sequelize = require('sequelize');
const ConnectionDb = new Sequelize('login', 'root', 'bigbang007E', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = ConnectionDb;