const db = require('./db');
const Sequelize = require('sequelize');

const moreSample = db.define('moreSample', {
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
});

module.exports = moreSample;