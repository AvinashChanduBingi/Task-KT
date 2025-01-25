const servicelayer = require("./userAccountService");
class userAccountController
{
    async createUserAccountController(req,res,userAccount)
    {
        try {
            
           await servicelayer.createUserAccountService(userAccount);
           res.send("account Created").status(201);
        } catch (error) {
            console.log(`Error in the user account ${error}`);
        }
    }

    async getAllUserAccountsController(req,res)
    {
        try {
        const data =  await  servicelayer.getAllUserAccountsService();
        res.send(data);

        } catch (error) {
            console.log(`Error in the user account ${error}`);
        }
    }

    async updateUserAccountController(req,res,id,userAccount)
    {
try {
     await servicelayer.updateUserAccountsService(id,userAccount);
     res.send("Updated Successfully")
} catch (error) {
    console.log(`Error in the user account ${error}`);
}
    }
}

module.exports = new userAccountController();