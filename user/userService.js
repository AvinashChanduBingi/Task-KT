const userModel = require("./userModel");

class userService 
{
    async createUserService(userObject)
    {
       try {
        const user = new userModel(userObject);
        await user.save();
        return;
       } catch (error) {
        console.log(`error in service layer ${error}`);
    
       }
    }

    async getAllUsersService()
    {
        try {
            return await userModel.find();
        } catch (error) {
            console.log(`error in service layer ${error}`);
        }
    }

    async updateUserService(id,user)
    {
        try {
            console.log(user);
           await userModel.findByIdAndUpdate(id,user);
            return;
        } catch (error) {
            console.log(`error in service layer ${error}`);
        }
    }
}

module.exports = new userService();