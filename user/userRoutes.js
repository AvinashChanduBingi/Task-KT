const express = require("express");
const controller = require("./userController");
const UserRouter = express.Router();



UserRouter.post("/createUser",(req,res)=>
{
    console.log(req.body);
 controller.createUserController(req,res,req.body);
}
);

UserRouter.get("/getAllUsers",(req,res)=>
{
    controller.getUsersController(req,res);
});
UserRouter.put("/updateUser",(req,res)=>
{
    console.log(req.body);
    controller.updateUserController(req,res,req.query.id,req.body);
});

UserRouter.get("/hello",)

module.exports = UserRouter;

