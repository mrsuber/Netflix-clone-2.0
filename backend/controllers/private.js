const User = require('../models/User')
const Movie = require('../models/Movie')

const bcrypt = require('bcryptjs')
const ErrorResponse = require('../utils/errorResponse')
var ObjectId = require('mongoose').Types.ObjectId;
//update user

exports.updateUser= async (req,res,next)=>{

  if(req.body.password){
    const salt =await bcrypt.genSalt(10)
    req.body.password=await bcrypt.hash(req.body.password,salt)
  }

  if(req.body.isAdmin && !req.user.isAdmin){
    return next(new ErrorResponse("Only Admin has privilage", 400))
  }


  //now we are working with database
  try{
    const user= await User.findByIdAndUpdate((req.params.id),{ $set:req.body },{new:true})
    res.status(201).json({success:true,data:"User update successfull"})

  }catch(error){
    next(error)

  }
}

//delet user

exports.deleteUser= async (req,res,next)=>{
  //now we are working with database
  try{
     await User.findByIdAndDelete(req.params.id)
    res.status(201).json({success:true,data:"User has been deleted ...."})

  }catch(error){
    next(error)

  }
}

//find user
exports.findUser= async (req,res,next)=>{
  //now we are working with database
  try{
     const user = await User.findById(req.params.id)
    res.status(201).json({success:true,data:user})

  }catch(error){
    next(error)

  }
}

//find all users
exports.getAllUsers= async (req,res,next)=>{
  const query = req.query.new;
  //now we are working with database
  try{
     const users = query? await User.find().sort({_id:-1}).limit(10) : await User.find()
    res.status(201).json({success:true,data:users})

  }catch(error){
    next(error)

  }
}

//find all users statistics
exports.getUserStatistics= async (req,res,next)=>{
  const today = new Date()
  const lastYear = today.setFullYear(today.setFullYear() - 1)

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //now we are working with database
  try{
    const data = await User.aggregate([
      {
        $project:{
          month:{$month:"$createdAt"}
        }
      },{
        $group:{
           _id:"$month",
           total: {$sum:1}
        }
      }
    ])

    res.status(200).json(data)
  }catch(error){
    next(error)

  }
}



exports.getPrivateData = (req,res,next) =>{
  // console.log(req.user._id)
  res.status(200).json(
    {
      sucess:true,
      data:"You got access to the private data (HomePage)",

    }
  )
}

exports.getAdminDashbourd = (req,res,next) =>{
  res.status(200).json(
    {
      sucess:true,
      data:"You got access to Admin Dashbourd",

    }
  )
}


exports.getUserDashbourd = (req,res,next) =>{
  res.status(200).json(
    {
      sucess:true,
      data:"You have access to user dashboard",

    }
  )
}

//Create movie
exports.createNewMovie = async (req,res,next) =>{
  try{
    const newMovie = await Movie.create(req.body)
    const saveMovie = await newMovie.save()
    res.status(200).json({success:true, data:saveMovie})
  }catch(error){next(error)}

}

//Update movie
exports.updateMovie = async (req,res,next) =>{
  try{
    const updateMovie = await Movie.findByIdAndUpdate({_id:(req.params.movieId)},{$set:req.body},{new:true})
    res.status(200).json({success:true,updateMovie})
  }catch(error){next(error)}

}

//Delete movie
exports.deleteMovie = async (req,res,next) =>{
  try{
  await Movie.findByIdAndDelete((req.params.movieId))
    res.status(200).json({success:true,data:"Movie deleted"})
  }catch(error){next(error)}

}

//Get movie
exports.getAMovie = async (req,res,next) =>{
  try{
  const movie = await Movie.findById({ _id: ObjectId(req.params.movieId)})

    res.status(200).json({success:true,data:movie})
  }catch(error){next(error)}

}

//Get all movie
exports.getAllMovie = async (req,res,next) =>{
  try{
  const movie = await Movie.find()
    res.status(200).json({success:true,data:movie})
  }catch(error){next(error)}

}


exports.getRandomMovie = async (req,res,next) =>{
  const type = req.query.type
  let movie;
  try{
    if(type==="series"){
      movie=await Movie.aggregate([
        {$match:{isSeries:true}},
        {$sample:{size:1}}
      ])
    }else{
      movie=await Movie.aggregate([
        {$match:{isSeries:false}},
        {$sample:{size:1}}
      ])
    }
    res.status(200).json({success:true,data:movie})
  }catch(error){next(error)}

}
