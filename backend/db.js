
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true';
const connectToMongo = async () => {
  try { 
    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:',error.message);
    process.exit(1);
  }
};
module.exports = connectToMongo;
