const express = require("express");
const router = express.Router();

router.get("/test1",(req,res,next)=>
{
 console.log(req.url);
 next();

});

function function1 (req,res,next)
{
    console.log("function 1");
    next();
}

function function2(req,res,next)
  {
        console.log("function 2");
        res.send("test1")
        next();
    }

   function function3 (req,res,next)
        {
            console.log("function 3");
            next();
        }
module.exports = router;