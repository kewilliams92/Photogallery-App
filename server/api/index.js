const router = require('express').Router();

// Mount our apiRouter on the /api path
router.use('/photographer', require('./photographer'));
router.use('/photo', require('./photo'));
router.use('/about', require("./about"));
router.use('/auth', require('./auth'));

// No routes matched? 404.
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
    }
);

module.exports = router;