const express = require("express");
const router = express.Router();
const { protect,isAdmin } = require('../middleware/auth')
const {
  getPrivateData,
  getUserDashbourd,
  getAdminDashbourd,
  updateUser,
  findUser,
  getAllUsers,
  deleteUser,
  getUserStatistics,
  createNewMovie,
  updateMovie,
  deleteMovie,
  getAMovie,
  getAllMovie,
  getRandomMovie,
  createNewList,
  updateList,
  deleteList,
  getAList,
  getAllList
} = require('../controllers/private')


//manupulate user data
router.route("/updateuser/:id").put(protect,updateUser)
router.route("/finduser/:id").get(protect,findUser)
router.route("/getallusers").get(protect,getAllUsers)
router.route("/stats").get(protect,getUserStatistics)
router.route("/deleteuser/:id").delete(protect,isAdmin,deleteUser)

//movie routes
router.route("/createnewmovie").post(protect,isAdmin,createNewMovie)
router.route("/updatemovie/:movieId").put(protect,isAdmin,updateMovie)
router.route("/deletemovie/:movieId").delete(protect,isAdmin,deleteMovie)
router.route("/getamovie/:movieId").get(protect,getAMovie)
router.route("/getallmovies").get(protect,isAdmin,getAllMovie)
router.route("/getrandommovies").get(protect,getRandomMovie)

//creat list for the homePage
router.route("/createlist").post(protect,isAdmin,createNewList)
router.route("/updatelist/:listId").put(protect,isAdmin,updateList)
router.route("/deletelist/:listId").delete(protect,isAdmin,deleteList)
router.route("/getalist/:listId").get(protect,getAList)
router.route("/getalllists").get(protect,getAllList)

//home  page route
router.route("/home").get(protect,getPrivateData);

//Admin dashboaud route
router.route("/adminDashbourd").get(protect,isAdmin,getAdminDashbourd);

//user dashboaud
router.route("/userDashbourd").get(protect,getUserDashbourd);

module.exports = router;
