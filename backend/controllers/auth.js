const crypto = require("crypto")
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')
//register user
exports.register= async (req,res,next)=>{
  const {username,email,password} = req.body;

  //now we are working with database
  try{
    const user= await User.create({
      username,email,password
    })

    sendToken(user, 201,res)
  }catch(error){
    next(error)

  }
}


//login user
exports.login= async (req,res,next)=>{
  const {email,password} = req.body;
  if(!email || !password){
    return next(new ErrorResponse("please provide an email and password", 400))
  }

  try{
    const user = await User.findOne({email}).select("+password")
    if(!user){
      return next(new ErrorResponse("Invalid credentials",401))

    }

    const isMatch = await user.matchPasswords(password)

    if(!isMatch){
      return next(new ErrorResponse("Invalid Login credentials",401))

    }


    sendToken(user, 200,res)
  }catch(error){

  }
}

//reset user password
exports.forgotpassword= async (req,res,next)=>{
  const {email} = req.body;

  try{
    const user=await User.findOne({email})

    if(!user){
      return next(new ErrorResponse("Email could not be sent",404))
    }
    const resetToken = user.getResetPasswordToken()

    await user.save()

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`
    console.log(resetUrl)
    const message = `
    <h1>You have requested a password reset</h1>
    <p>Please go to this link to reset your password </p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `

    try{
      await sendEmail({ to:user.email, subject:"Password Reset Request",text:message   })

      res.status(200).json({success:true, data:"Email sent"})
    }catch(error){
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent",500))
    }
  }catch(error){
    next(error)
  }
}

//user info form token
exports.userinfo = async (req,res,next)=>{
const {token} = req.body;
try{
  const user = await User.findOne({
    token,
    tokenExpire:{$gt:Date.now()}
  })
  if(!user){
    return next(new ErrorResponse("Invalid Reset Token, you cant get user info",400))
  }

  res.status(201).json({
    success:true,
    data:user
  })
}catch(error){next(error)}
}
//password reset done
exports.resetpassword= async (req,res,next)=>{
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

  try{
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{$gt:Date.now()}
    })

    if(!user){
      return next(new ErrorResponse("Invalid Reset Token",400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save()

    res.status(201).json({
      success:true,
      data:"Password Reset Success"
    })

  }catch(error){
    next(error)
  }
}

const sendToken = (user,statusCode,res) =>{
  const token = user.getSignedToken()
  res.status(statusCode).json({success:true,token,user})
}
