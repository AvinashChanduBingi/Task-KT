const express = require("express");
const accountRouter = express.Router();
const controller = require("./accountController");

accountRouter.post("/addAccount",(req,res)=>
{
   controller.createAccountController(req,res,req.body);
});

accountRouter.get("/getAccpountDetails",(req,res)=>{
  controller.getAllAccountDetailsController(req,res);
});

module.exports = accountRouter;
