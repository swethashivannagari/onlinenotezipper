//Connection file to mongo db
const mongoose =require( "mongoose");

require('dotenv').config()
const connectDB = async () => {
  try {
    const conn=await mongoose.connect("process.env.MONGO_URI", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    });
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
   
  }
};

module.exports=connectDB