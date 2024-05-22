const mongoose = require('mongoose');
const { Schema } = mongoose;
const Noteschema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
 },
    title:{
    type:String,
    requird :true
},
    description:{
    type:String,
    requird :true 
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
module.exports=mongoose.model('notes',Noteschema);