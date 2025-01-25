const express = require("express");
const controller = require("./userAccountControler");
const router = express.Router();


router.post("/createUserAccount",(req,res)=>
{
controller.createUserAccountController(req,res,req.body);
});

router.get("/getAllUserAccounts",(req,res)=>
{
    controller.getAllUserAccountsController(req,res);
});

router.put("/updateUseAccount",(req,res)=>
{
controller.updateUserAccountController(req,res,req.query.id,req.body);
});

module.exports = router;