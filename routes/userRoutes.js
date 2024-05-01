const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
  
} = require("./../controllers/userController");



//routes
//Method -
router.post("/register", registerController);

//MEthod - POST
router.post("/login", loginController);



module.exports = router;