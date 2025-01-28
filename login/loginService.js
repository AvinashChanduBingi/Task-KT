const userModel = require("../user/userModel");
const accountModel  = require("../account/accountmodel");
const jwt = require("jsonwebtoken");
const customError = require("../ErrorHandlers/customError");
require("dotenv").config();
class LoginService
{
 async loginAuthenticateService(email,password,accountName)
 {
    try {
        console.log("Inside Login Service : Login Authenticate service method");

        /*checking if user is in database*/
         const user = await userModel.findOne({email:email});

         const account = await accountModel.findOne({name : accountName });

         if(!account) throw new customError("Invalid account Name",400);
         if(!user)
         {
            /*no user found in the database throwing error*/
           throw new customError("User not found in the database",404);
         }
        if(user.password===password)
         {

            /*User Authenticated and generating JWT token */
            const token =jwt.sign({  user : user._id , account : account._id,}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3h" });
              return {
               success : true,
                token
               };
         }
         else
         {
            /* Password is incorrect , Throwing error*/
            throw new customError("Password Incorrect",401);
              
         }
         
    } catch (error) {
        console.log(`inside Login Service catch : login Authenticate Service method Error : ${error}`);
      throw new customError((error instanceof customError)?error.message:"Error  please try again",error.statusCode);
    }
 }


}
module.exports = new LoginService();