const service = require("./loginService");
class LoginController
{
     async LoginCheckController(req,res)
     {
        try {
            console.log("controller Log in check");
          const result = await service.loginCheckService(req.query.email,req.query.password);
          console.log(result);

          if(result.success)
          {
            console.log("lkl")
            res.status(200).json({message : "User Login Successful",token : result.token});
          }
          else
          {
            console.log("why")
            res.send(result.message).status(401);
          }
          console.log("controller Log in check completed");
          
        } catch (error) {
            console.log(`error in the Login controller ${error}`)
        }
     }
}
module.exports = new LoginController();