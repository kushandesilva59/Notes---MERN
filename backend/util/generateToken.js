const jwt = require("jsonwebtoken");

const genearateToken = (id) => {
    return jwt.sign({ id }, "sample", {
      expiresIn: "30d",
    });
};


module.exports = genearateToken;