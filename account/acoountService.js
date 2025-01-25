const model = require("./accountmodel");
class accountservice
{
    async createAccountService(data)
    {
           try {
              const account  = new model(data);
              await account.save();
              return;
           } catch (error) {
            console.log(`error in account service ${error}`)
           }
    }
    async getAllAccountDetailsService(data)
    {
           try {
             return await model.find();
           } catch (error) {
            console.log(`error in account service ${error}`)
           }
    }
}

module.exports = new accountservice();