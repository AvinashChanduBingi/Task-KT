const express = require("express");
const controller = require("./deptController");
const router = express.Router();

router.post("/createDept",(req,res)=>
{
controller.createdept(req,res,req.body);
});

router.get("/getAllDept",(req,res)=>
{
    controller.getAllDepts(req,res);
});

router.put("/updateDept",(req,res)=>
{
   controller.updateDept(req,res);
});

module.exports = router;