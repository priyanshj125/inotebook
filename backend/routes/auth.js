const express = require('express');
const { model } = require('mongoose');
const User = require('/home/priyansh/Desktop/programing/react/prenotebook/backend/modules/User.js');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'priyanshlovejesikanomore'
router.post('/createuser', [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {

    // const user = await User(req.body);
    // user.save();

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }


    try {
        let users = await User.findOne({ email: req.body.email })
        if (users) {
            return res.status(400).json({ error: 'email already exists' })
        }

        //create a new user->
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data = {
            id: user._id,
            name: user.name,
            email: user.email
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json(authtoken);
        // res.json(user)
    } catch (e) {                                     //catch the error
        console.error(e.message);
        res.status(500).send('Server Error')
    }
})
module.exports = router