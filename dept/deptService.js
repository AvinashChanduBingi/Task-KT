const model = require("./deptModel");
const accountModel = require("../account/accountmodel");
class deptService
{
    async createDeptService(data)
    {
        try {
            console.log(data.account);
           const account = await accountModel.findOne({name : data.account});
            console.log(await accountModel.findOne({name : "bento"}));
            const dept = new model(
                {
                    name : data.name,
                    accId : account._id,
                }

            );
            await dept.save();

        

        } catch (error) {
            console.log(`error in service ${error}`);
        }
    }

    async getAllDeptService()
    {
        try {
          const data =  await model.find().populate("accId");
          return data;
        } catch (error) {
            console.log(`error in dept service layer ${error}`);
        }
    }

    async updateDeptService(id,dept)
    {
        try {
            await model.findByIdAndUpdate(id,dept);
            return;
        } catch (error) {
            console.log(`error in dept service layer ${error}`);
        }
    }
}

module.exports = new deptService();