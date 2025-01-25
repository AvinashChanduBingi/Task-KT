const express = require("express");
const controller = require("./deptController");
const router = express.Router();

router.post("/createDept",(req,res)=>
{
controller.createdeptController(req,res,req.body);
});

router.get("/getAllDept",(req,res)=>
{
    controller.getAllDeptController(req,res);
});

router.put("/updateDept",(req,res)=>
{
    console.log(req.query.id);
    console.log(req.body);
   controller.updateDeptController(req,res,req.query.id,req.body);
});

module.exports = router;