const jwt = require("jsonwebtoken");

class jwtVerify
{
  
  authenticateToken (req, res, next) {
    console.log("inside the JWTverify class : authenticateToken module ")
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }
  /*Verifing the user JWT token */
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {

    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.account = data.account
    req.user = data.user; 
   
    next();
  });
};
}
module.exports = new jwtVerify();
