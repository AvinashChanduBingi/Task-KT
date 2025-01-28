const express = require("express");
const accountRouter = express.Router();
const controller = require("./accountController");

accountRouter.post("/addAccount",(req,res)=>
{
   controller.createAccount(req,res);
});

accountRouter.get("/getAccpountDetails",(req,res)=>{
  controller.getAllAccountDetails(req,res);
});

module.exports = accountRouter;
