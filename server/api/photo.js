const router = require('express').Router();
const { Photo } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const photos = await Photo.findAll();
        res.json(photos);
    } catch (err) {
        next(err);
    }
}
);


module.exports = router;