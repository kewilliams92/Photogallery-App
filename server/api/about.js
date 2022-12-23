const router = require('express').Router();

//an about route
router.get('/', (req, res, next) => {
    res.send('This is the about page!');
});

router.post('/', (req, res, next) => {
    res.send('This is the about page!');
});


module.exports= router;