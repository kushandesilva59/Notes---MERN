const User = require("../models/userModel");
const asynchandler = require("express-async-handler");
const { use } = require("../routes/userRoute");
const genearateToken = require("../util/generateToken");

const registerUser = asynchandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  console.log(name, email);

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!...");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic
  });

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genearateToken(user._id),
    });
  }else{
    res.status(400)
    throw new Error('Error Occured!..')
  }

});

const authUser = asynchandler(async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email})
  console.log(user)
 
  if(user && (await user.matchPassword(password))){
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token:genearateToken(user.id)
    });
  }else{
    res.status(400)
    throw new Error("Invalid email or password")
  }
});

module.exports = { registerUser , authUser};
