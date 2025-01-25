const service = require("./acoountService");

class controller
{
    async createAccountController(req,res,data)
    {
        try {
           await service.createAccountService(data);
           res.send("account created").status(201);
        } catch (error) {
            console.log(`error in the controller ${error}`);
        }
    }
    async getAllAccountDetailsController(req,res)
    {
        try {
           const data =await service.getAllAccountDetailsService();
           res.send(data);
        } catch (error) {
            console.log(`error in the controller ${error}`);
        }
    }
}

module.exports = new controller();