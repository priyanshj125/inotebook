const moongoose = require('mongoose');
const Noteschema = new Schema({
    title:{
    type:String,
    requird :true
},
    description:{
    type:String,
    requird :true,
    unique:true
},
     date:{
    type:Date,
    defult:Date.now
},
     tag:{
        type:String,
        requird :true
     }

});
module.exports=moongoose.model('motes',Noteschema);