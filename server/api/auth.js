const router = require('express').Router();
const { Photographer } = require('../db');
const bcrypt = require('bcrypt');

//Register a new user
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = await Photographer.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        });
        res.status(200).json(newUser);
    } catch(err){
        console.log(err)
    }
});

//Login
router.post('/login', async (req, res) => {
    try {
        const user = await Photographer.findOne({ userName: req.body.userName } );
        !user && res.status(404).json("Wrong credientials");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong credientials");

        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err) {
        console.log(err)
    }
});

module.exports = router;