const User = require("../models/userModel");
const asynchandler = require("express-async-handler");
const { use } = require("../routes/userRoute");

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
    pic,
  });

  if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic
    })
  }else{
    res.status(400)
    throw new Error('Error Occured!..')
  }

});

module.exports = { registerUser };
