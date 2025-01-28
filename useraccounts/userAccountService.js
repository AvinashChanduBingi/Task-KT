const usermodel = require("../user/userModel");
const accountmodel = require("../account/accountmodel");
const deptModel = require("../dept/deptModel");
const userAccountsModel = require("./userAccountModel");
const customError = require("../ErrorHandlers/customError");
class userAccountservice
{

    async createUserAccount(data)
    {
try {

    console.log("Inside UserAccount Service -> CreateUserAccount Method");

    let arr = new Set();
    let useraccount = new userAccountsModel();
    /*checking if incoming data is present or not */
if(data.dept === undefined && data.dept.length===0)
{
   /*retrivind dept details  using accountid*/
    const deptArr = await deptModel.find({accId : data.accId},{_id:1});

    if(!deptArr) throw new customError("No depts present!",400), 

    
    deptArr.map(obj => {
        arr.add(obj._id.toString());
    });

  useraccount = new userAccountsModel({
    accId : data.accId,
    userId : data.userId,
    dept : arr
});
}
else{
      useraccount = new userAccountsModel(data);
}

await useraccount.save();

return{
    messsage : "UserAccounts Created",
    status : true
};


} catch (error) {
    console.log(`error in the UserAccountsService.js -> createUserAccounts ${error}`);

    /*Dupliacation error -> user details already exist in the database*/
    if(error.code === 11000) throw new customError(`Details Arlready exists.value Should be unique .Duplicate Field : ${Object.keys(error.keyValue)}`,400);
    
    throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode||500);    
}
    }

    async getAllUserAccounts()
    {
        try {
            console.log("Inside UserAccount Service -> getAllUserAccounts Method");
            
            /*retriving User Account details and referencing account dept and user schemas using populate*/
            const userAccounts = await userAccountsModel.find()
            .populate("accId") 
            .populate("userId") 
            .populate("dept");  

          return(
            {
                status : true,
                data : userAccounts
            }
          );

        } catch (error) {
             console.log(`error in the UserAccountsService.js -> createUserAccounts ${error}`);

    throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode||500);    ;
        }
    }

    async updateUserAccounts(id,userAccount)
    {
        try {
            console.log("Inside UserAccount Service -> updateUserAccounts Method");
           
            const user = userAccountsModel.find(id);

            if(!user) throw new customError("User Not Found",404), 
            
             /*Updating User account By using ID*/
            await userAccountsModel.findByIdAndUpdate(id,userAccount);
            
            return(
                {
                    status : true,
                    message : "Succesfully Updated"
                }
            );
        } catch (error) {
             console.log(`error in the UserAccountsService.js -> updateUserAccounts ${error}`);

    throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode||500);    
        }
    }

}

module.exports = new userAccountservice();