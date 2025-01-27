const express = require("express");
const router = express.Router();
const Controller = require("./loginController");
router.get("/loginCredentials",(req,res)=>
{
    console.log("hi");
    Controller.LoginCheckController(req,res);
})

module.exports = router;