const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/photo-gallery-app', {
    logging: false
});

module.exports = db;