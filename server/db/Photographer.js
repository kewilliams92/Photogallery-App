const db = require('./db');
const Sequelize = require('sequelize');

const Photographer = db.define('photographer', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profilePic: {
        type: Sequelize.STRING,
        defaultValue: '',
    },
});


module.exports = Photographer;