const mongoose = require('mongoose');
const mongo = require('config').get('mongo');

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongo.url);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error in MongoDB Connection',err.message);
    // process.exit(1);
  }
};

module.exports = connectMongoDB;