const userService = require("./userService");

class controller 
{
    async createUserController(req,res,userObject)
    {
     try {
      await userService.createUserService(userObject);
      res.send("user created").status(201);
     } catch (error) {
        console.log(`Error in String ${error}`);
     }
    }

    async getUsersController(req,res)
    {
        try {
            const data = await userService.getAllUsersService();
            res.send(data).status(200);
            return;
        } catch (error) {
            console.log(`error in controller layer ${error}`);
        }
    }

    async updateUserController(req,res,id,user)
    {
        try {
            await userService.updateUserService(id,user);
            res.send("updated user details");
        } catch (error) {
            console.log(`error in controller layer ${error}`);
        }
    }
}

module.exports = new controller();