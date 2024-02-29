const express = require('express');
const { model } = require('mongoose');
const User = require('/home/priyansh/Desktop/programing/react/prenotebook/backend/modules/User.js');
const router = express.Router()
const { body, validationResult } = require('express-validator');
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
        user = await User.create({

            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        res.json(user)
    } catch (e) {                                     //catch the error
        console.error(e.message);
        res.status(500).send('Server Error')
    }
})
module.exports = router