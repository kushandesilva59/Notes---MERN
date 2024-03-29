const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(token)

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decode token id
      const decoded = jwt.verify(token, "sample");

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    //extra
    res.json({ message: "Not authorized, no token" });
    throw new Error("Not authorized, no token");
  }

  if (!token) {
    res.status(401);
    //extra
    res.json({ message: "Token eka nah" });
    throw new Error("Token eka nah");
  }
});

module.exports = { protect };
