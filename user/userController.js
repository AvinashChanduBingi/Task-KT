const userService = require("./userService");
const CustomError = require("../ErrorHandlers/customError");

class controller 
{
    async createUser(req,res)
    {
     try {
        console.log("Inside userController.js -> createUser method");

     /*Sending user object to service class */
      await userService.createUser(req.body);

      res.status(201).json(
        {
            message:"User created",
            status : true

        }
      );
     } catch (error) {
        console.log(`Error in UserController.js  ${error}`);
    
        if(error instanceof CustomError)
        {
            return res.status(error.statusCode).json(
                {
                    status : false,
                    message : error.message || this.error
                }
            )
        }
        
        return res.status(500).json(
            {
                status: false,
                message :" Internal Server Error"
            }
        )
    }
    }
    

    async getAllUsers(req,res)
    {
        try {

            console.log("Inside userController.js -> createUser method");

            /*Retriving all users data from database*/
            const result = await userService.getALlUsers();

           
            res.status(200).json(
                {
                   status : result.status ,
                     data :result.userData 
                }
            )
              
        } catch (error) {

            console.log(`Error in UserController.js  ${error}`);
    
            if(error instanceof CustomError)
            {
                return res.status(error.statusCode).json(
                    {
                        status : false,
                        message : error.message || this.error
                    }
                )
            }
            
            return res.status(500).json(
                {
                    status: false,
                    message :" Internal Server Error"
                }
            )
        }
    }

    async updateUser(req,res)
    {
        try {

            console.log("Inside userController.js -> updatUser method");

            /* updating user using id */
            await userService.updateUser(req.query.id,req.body);


           res.status(201).json(
        {
            message:"Updated User",
            status : true

        });
        } catch (error) {

            console.log(`Error in UserController.js  ${error}`);
    
            if(error instanceof CustomError)
            {
                return res.status(error.statusCode).json(
                    {
                        status : false,
                        message : error.message || this.error
                    }
                )
            }
            
            return res.status(500).json(
                {
                    status: false,
                    message :" Internal Server Error"
                }
            )
        }
    }
}

module.exports = new controller();