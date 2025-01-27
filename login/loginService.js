const userModel = require("../user/userModel");
const userAccountModel  = require("../useraccounts/userAccountModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class LoginService
{
 async loginCheckService(email,password)
 {
    try {
        console.log("login check service layer in");
         const user = await userModel.findOne({email:email});
         if(!user)
         {
            console.log("user not found")
             return {success : false ,message : "user not found"};
         }
        if(user.password===password)
         {
            console.log("user found")
            const token =jwt.sign({  user : user._id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
              return {success : true, token};
         }
         else
         {
            console.log(`${user.password} ${password}`)
            console.log(" Invalid Password")
              return {success : false , message : "Invalid Password"};
         }
         
    } catch (error) {
         return {message :`Error in the service layer of the login ${error}`};
    }
 }


}
module.exports = new LoginService();