const express=require('express');
const router = express.Router();

const {register,login,forgotpassword,resetpassword,userinfo} = require('../controllers/auth')

router.route("/register").post(register)
router.route("/userinfo").post(userinfo)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)


module.exports = router;
