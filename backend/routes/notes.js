const express = require('express');
const router = express.Router();
var fetchuser=require('../middleware/fetchuser')
const Notes=require('../modules/Notes');
try {
    router.get('/fetch', fetchuser  ,async (req,res)=>{
        console.log("it working");
        const notes=await Notes.find({user:req.user.id});
        res.json([]);
    }  );
    
} catch (error) {
    console.error(error.message);
    res.send(error.message);
}


module.exports = router