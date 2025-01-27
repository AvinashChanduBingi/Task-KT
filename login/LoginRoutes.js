const express = require("express");
const router = express.Router();
const Controller = require("./loginController");
router.get("/loginCredentials",(req,res)=>
{
    console.log("Inside Login Routes");
    Controller.loginAuthenticateController(req,res);
})

module.exports = router;