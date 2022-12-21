const router = require('express').Router();
const { Sample } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const samples = await Sample.findAll();
        res.json(samples);
    } catch (err) {
        next(err);
    }
});


module.exports = router;