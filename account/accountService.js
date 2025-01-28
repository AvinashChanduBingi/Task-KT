const model = require("./accountmodel");
class accountservice
{
    async createAccount(data)
    {
           try {


              console.log("Inside Account Service -> createAccount Method");
              /*creating account document*/
              const account  = new model(data);
              await account.save();
              return{
                     status : true,
                     message : "Account Created"
              }
           } catch (error) {
              console.log(` Error in Accountservice.js file, message :  ${error.message}`);

              /*Dupliacation error -> user details already exist in the database*/
              if(error.code === 11000) throw new customError(`Details Arlready exists.value Should be unique .Duplicate Field : ${Object.keys(error.keyValue)}`,400);
      
              throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode);  
           }
    }
    async getAllAccountDetails(data)
    {
           try {

              console.log("Inside Account Service -> getAllAccountDetails Method");

            /*retriving all account documents */
             const data =await model.find();

             return{
              status : true,
              AccountData : data
             }
           } catch (error) {
              console.log(` Error in AccountService.js file, message :  ${error.message}`);

      
              throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode);  
           }
    }
}

module.exports = new accountservice();