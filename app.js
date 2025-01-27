const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");


app.use(express.json());


/*-----------------------DataBase connection----------------------------*/

mongoose.connect("mongodb://localhost:27017/project2").then(console.log("Successfully connected to the Database")).catch((err)=>{console.log(`error connecting to the Database Reason : ${err}`)});

/*-----------------------------------------------------------------------*/


/*connecting to main router*/
app.use("/api",router);

app.listen(3090);


