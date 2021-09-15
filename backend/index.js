require('dotenv').config({path:"./config.env"})
const express = require("express")
const app = express()
const connectDB = require("./config/db")


//start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`))

  process.on('unhandleRejection', (err,promise) =>{
    console.log(`Logged Error:${err}`)
    server.close(()=>process.exit(1))
  })

//conecting to mogodb
connectDB();
