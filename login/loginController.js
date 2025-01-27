const service = require("./loginService");
const customError = require("../ErrorHandlers/customError");

class LoginController
{
     async loginAuthenticateController(req,res)
     {
        try {
            console.log("Inside login Controller : Login Authenticate Controller method");

          /*Authenticating the User and generating JWT Token*/
          const result = await service.loginAuthenticateService(req.body.email,req.body.password,req.body.account);
         
          if(!result)
          {
            throw new customError("Internal Server Error",500);
          }

          if(result.success)
          {
            /*user Authenticated and sending the JWT tokn*/
            res.status(200).json(
              {
                message : "User Login Successful",
                token : result.token
              });
          }
        } catch (error) {
             console.log(`inside Login Controller : Login Authenticate Controller method catch Error : ${error}`);

                 if(error instanceof customError)
                 {
                  return res.status(error.statusCode).json(
                    {
                      status : false ,
                      message : error.message || this.error
                    }
                  )
                 }
               return res.status(500).json(
                  {
                    status : false ,
                    message : this.error
                  }
                )

        }
     }
}
module.exports = new LoginController();