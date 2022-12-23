const db = require('./db');
const Sequelize = require('sequelize');

const Photo = db.define('photo', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    userName : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categories: {
        type: Sequelize.ARRAY(Sequelize.STRING),
    }
});

module.exports = Photo;