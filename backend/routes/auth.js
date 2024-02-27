const express=require('express');
const { model } = require('mongoose');
const User= require('/home/priyansh/Desktop/programing/react/prenotebook/backend/modules/User.js');
const router = express.Router()
const {body,validationResult} =require('express-validator');
router.post('/createuser',[
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long') 
] ,async (req, res)=> {
    // obj={
    //     name:"priyasnh",
    //     number:34
    // }
    // res.json(obj)
    // console.log(req.body);
    const user=await User(req.body);
    user.save();

    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    let users =await User.findOne({email : req.body.email})
    if(users){
        return res.status(400).json({error:'email already exists'})
    }
 
    user= await User.create({

        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        
    })
    res.json(user)
    // .then(user=>res.json(user))
    // .catch(err=>{console.log(err)
    //  res.json({error:'please enter a uniqe email'})})
    // // res.send(req.body);


})
module.exports=router