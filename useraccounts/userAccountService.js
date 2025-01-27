const usermodel = require("../user/userModel");
const accountmodel = require("../account/accountmodel");
const deptModel = require("../dept/deptModel");
const userAccountsModel = require("./userAccountModel");
class userAccountservice
{

    async createUserAccountService(data)
    {
try {

    console.log(data.dept === undefined);
    let useraccount = new model();
if(data.dept === undefined && data.dept.length==0)
{
    console.log("hi");
    const deptArr = await deptModel.find({accId : data.accId},{_id:1});
let arr = [];
deptArr.map(obj => {
     arr.push(obj._id.toString())
  });

  useraccount = new model({
    accId : data.accId,
    userId : data.userId,
    dept : arr
});
}
else{
      useraccount = new model(data);
}


console.log(useraccount);
await useraccount.save();


} catch (error) {
    console.log(`error in the service layer ${error}`);
}
    }

    async getAllUserAccountsService()
    {
        try {
            const userAccounts = await userAccountsModel.find()
            .populate("accId") 
            .populate("userId") 
            .populate("dept");  
          return userAccounts;
        } catch (error) {
            console.log(`error in service layer ${error}`);
        }
    }

    async updateUserAccountsService(id,userAccount)
    {
        try {
            await userAccountsModel.findByIdAndUpdate(id,userAccount);
            return;
        } catch (error) {
            console.log(`error in service layer ${error}`)
        }
    }

}

module.exports = new userAccountservice();