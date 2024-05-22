const mongoose= require('mongoose');

const connectDb =async()=>{
    if (mongoose.connection.readystate >=1) return;

    try {
        await mongoose.connect(`mongodb+srv://priyanshjain8491:aPvoRd73cDd5WgGw@inotebook.3gzpd1q.mongodb.net/`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) ;
    console.log("mongodb atlas connected......");
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
module.exports=connectDb;

