const db = require('./db');
const Sample = require('./Sample');
const Sample2 = require('./Sample2');
const seed = require('./seed');

Sample.belongsTo(Sample2);
Sample2.hasMany(Sample);

module.exports = {
    db,
    Sample,
    Sample2,
    seed
};