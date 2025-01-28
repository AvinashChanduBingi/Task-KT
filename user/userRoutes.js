const express = require("express");
const controller = require("./userController");
const UserRouter = express.Router();



UserRouter.post("/createUser",(req,res)=>
{
    console.log(req.body);
 controller.createUser(req,res);
}
);

UserRouter.get("/getAllUsers",(req,res)=>
{
    controller.getAllUsers(req,res);
});
UserRouter.put("/updateUser",(req,res)=>
{
    console.log(req.body);
    controller.updateUser(req,res);
});

module.exports = UserRouter;

