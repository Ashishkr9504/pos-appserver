// const mongoose = require('mongoose');
// const colors= require('colors');
// const dotenv=require('dotenv');
// dotenv.config();

// //connecDB Function

// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL);
//     console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
//   } catch (error) {
//     console.log(`Error : ${error.message}`.bgRed);
//     process.exit(1);
//   }
// };

// //export
// module.exports = connectDb;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDb = async () => {
  try {
    const dbURI = process.env.MONGODB_URL;
    if (!dbURI) {
      throw new Error('MongoDB connection string is missing or undefined in .env file.');
    }

    await mongoose.connect(dbURI);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

module.exports = connectDb;
