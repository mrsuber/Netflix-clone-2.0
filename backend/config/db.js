const mongoose = require('mongoose')

const connectDB = async() =>{
  await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useunifiedTopology:true
  })
  .then(()=>{console.log("MongoDB connected")})
  .catch(err=>console.log(err))

  }

module.exports = connectDB
