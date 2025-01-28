const servicelayer = require("./userAccountService");
const customError = require("../ErrorHandlers/customError");

class userAccountController
{
    async createUserAccount(req,res)
    {
        try {
            console.log("Inside UserAccount Controller -> getAllUserAccounts Method");

            /*Creating User Account using Account id and User id*/
           const result = await servicelayer.createUserAccount(req.body);
           res.status(201).json(
            {
                status:true,
                message : result.messsage
            }
           )
        } catch (error) {
            console.log(`Error in UserController.js  ${error}`);
    
            if(error instanceof customError)
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

    async getAllUserAccounts(req,res)
    {
        try {
            console.log("Inside UserAccount Controller -> getAllUserAccounts Method");
         
        /*retriving data of all user accounts*/
        const data =  await  servicelayer.getAllUserAccounts();

        res.status(200).json(
            {
                status :true,
                data :data

            }
        )

        } catch (error) {
            console.log(`Error in UserController.js  ${error}`);
    
            if(error instanceof customError)
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

    async updateUserAccount(req,res)
    {
try {
    console.log("Inside UserAccount Controller -> updateUserAccount Method");

    /*Updating the UserAccounts  By using the Account id*/
     await servicelayer.updateUserAccounts(req.query.id,req.body);

     res.status(200).json(
        {
             status : true,
             message : "Succesfully Updated"
        }
     )
} catch (error) {
    console.log(`Error in UserController.js  ${error}`);
    
    if(error instanceof customError)
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

module.exports = new userAccountController();