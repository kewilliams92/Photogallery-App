const router = require('express').Router();

// Mount our apiRouter on the /api path
router.use('/sample', require('./sample'));
router.use('/sample2', require('./sample2'));

// No routes matched? 404.
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
    }
);

module.exports = router;