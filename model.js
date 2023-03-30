const sequelize = require('./database');
const Sequelize = require('sequelize');
const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    desc: {
        type: Sequelize.STRING
    }
})
module.exports = Book