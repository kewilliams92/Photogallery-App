const db = require('./db');
const Sequelize = require('sequelize');

const Sample = db.define('sample', {
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
});


module.exports = Sample;