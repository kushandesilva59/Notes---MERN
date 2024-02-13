const mongoose = require("mongoose");

const uri = 'mongodb://localhost:27017/myDatabase'; // Replace 'myDatabase' with your database name


const connectDB = async () => {
  try {

    

    const conn = await mongoose.connect("mongodb://localhost:27017/MERN-notes", {
      useUniFiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Mongo Db connected :  ${conn}`);
  } catch (err) {
    console.log(`Error  : ${err.message}`);
    process.exit();
  }
};


module.exports = connectDB;