const db = require('./db');
const Photographer = require('./Photographer');
const Photo = require('./Photo');
const seed = require('./seed');

Photo.belongsTo(Photographer);
Photographer.hasMany(Photo);


module.exports = {
    db,
    Photographer,
    Photo,
    seed
};