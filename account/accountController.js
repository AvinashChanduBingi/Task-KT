const service = require("./accountService");

class controller
{
    async createAccount(req,res)
    {
        try {
            console.log("Inside Account Controller -> createAccount Method");

         const result =  await service.createAccount(req.body);
           res.status(201).json(
            {
                status: result.status,
                message: result.message 
            }
           );
        } catch (error) {
             console.log(`Error in AccountController.js  ${error}`);
    
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
        );
        }
    }
    async getAllAccountDetails(req,res)
    {
        try {
            console.log("Inside Account Controller -> getAllAccountDetails Method");

           const data =await service.getAllAccountDetails();
           res.status(200).json(
            {
               status : data.status,
              data :data.AccountData
            }
           )
        } catch (error) {
            console.log(`Error in AccountController.js  ${error}`);
    
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