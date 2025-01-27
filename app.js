const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");
const loginController = require("./login/LoginRotes");
const authenticate = require("./authentication");
const testRouter = require("./Test/testRouter");
app.use(express.json());


/*-----------------------DataBase connection----------------------------*/

mongoose.connect("mongodb://localhost:27017/project2").then(console.log("connected to the Database")).catch((err)=>{console.log("error")});


/*-----------------------------------------------------------------------*/

app.use("/api",router);
app.use("/api/login",loginController);
app.get("/protected",authenticate,(req,res)=>
{
res.send("Authenticate");
});
app.use("/bento/test",testRouter);

app.get("/hello/hi/j",(req,res)=>
{
    console.log(req.url);
})
app.listen(3090);

/*---------------------------------login Credentials --------------------- */

