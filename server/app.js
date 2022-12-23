const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//Logging middleware
app.use(morgan('dev'));

//Static middleware
app.use(express.static(path.join(__dirname, '../public')));

//Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Mount our apiRouter on the /api path
app.use('/api', require('./api'));

//send index.html
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}
);

module.exports = app;