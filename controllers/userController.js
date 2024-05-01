const userModal = require("../models/userModel");
const registerController = async(req,res)=>{
  try{
    const newUser=new userModal({...req.body,verified:true});
    await newUser.save();
    res.status(200).json({ message: "Registration successful" });
  }
  catch(error){
    res.status(500).json({ message: "Internal server error" });
    console.log(error);

  }
}

const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModal.findOne({ userId, password, verified: true });

    if (user) {
      res.status(200).json(user); // Send user details on successful login
    } else {
      res.status(401).json({
        message: "Login failed. User not found or not verified.",
        user,
      });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports ={
  loginController,
  registerController,
};