const mongoose = require('mongoose');
const {Schema} = mongoose;
const Userschema = new Schema({
    name:{
        type:String,
        requird :true
    },
    email:{
        type:String,
        requird :true,
        unique:true
    },
    password:{
        type:String,
        requird :true
    }
});
const User = mongoose.model('user',Userschema);
// User.createIndexes();
module.exports =User