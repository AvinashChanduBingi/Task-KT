const express = require("express");
const controller = require("./userAccountControler");
const router = express.Router();


router.post("/createUserAccount",(req,res)=>
{
controller.createUserAccountController(req,res,req.body);
});

router.get("/getAllUserAccounts",helo,(req,res,next)=>
{
    // controller.getAllUserAccountsController(req,res);
    console.log("hello  1");

});

router.put("/updateUseAccount",(req,res)=>
{
controller.updateUserAccountController(req,res,req.query.id,req.body);
});

function helo(req,res,next)
{
console.log("hello");
res.send("hello");
}
module.exports = router;