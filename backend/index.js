require('dotenv').config({path:"./config.env"})
const express = require("express")
const connectDB = require("./config/db")
const authRoute = require("./routes/auth")
const errorHandler = require('./middleware/error')

//conecting to mogodb
connectDB();



//setting app to accept jsonfiles
const app = express()
app.use(express.json())

//connecting the routes
app.use("/api/auth",authRoute)
app.use('/api/private',require('./routes/private'))
//Error unhandler(should be last piece of middleware)
app.use(errorHandler)

//start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`))

  process.on('unhandleRejection', (err,promise) =>{
    console.log(`Logged Error:${err}`)
    server.close(()=>process.exit(1))
  })
