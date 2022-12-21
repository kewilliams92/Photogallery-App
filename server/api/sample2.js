const router = require('express').Router();
const { Sample2 } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const sample2s = await Sample2.findAll();
        res.json(sample2s);
    } catch (err) {
        next(err);
    }
}
);

module.exports = router;