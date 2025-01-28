const express = require("express");
const controller = require("./userAccountControler");
const router = express.Router();


router.post("/createUserAccount",(req,res)=>
{
controller.createUserAccount(req,res);
});

router.get("/getAllUserAccounts",(req,res,next)=>
{
     controller.getAllUserAccounts(req,res);
   

});

router.put("/updateUserAccount",(req,res)=>
{
controller.updateUserAccount(req,res);
});


module.exports = router;