const model = require("./deptModel");
const accountModel = require("../account/accountmodel");
const customError =require("../ErrorHandlers/customError");
class deptService
{
    async createDept(data)
    {
        try {

            console.log("Inside deptService.js -> createDept method");

            /*creating the Dept document using Name and Account id */
            const dept = new model(
                {
                    name : data.name,
                    accId : data.account,
                }
            );
                
        if(!dept) throw new customError("Error! creating Dept,Dept not Created",500);

            await dept.save();
         
            return{
                message : "dept Created",
                status : true
            };
        

        } catch (error) {
            console.log(`error in the deptService.js -> createDept ${error}`);

            /*Dupliacation error -> user details already exist in the database*/
        if(error.code === 11000) throw new customError(`Details Arlready exists.value Should be unique .Duplicate Field : ${Object.keys(error.keyValue)}`,400);

    throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode||500);    
        }
    }

    async getAllDepts()
    {
        try {
            console.log("Inside deptService.js -> getAllDept method");

         /*retriving documents of Dept Schema and referencing Account using populate*/
          const data =  await model.find().populate("accId");


          return {
            status : true,
            deptdata : data
          }
        } catch (error) {
            console.log(`error in the deptService.js -> datAllDepts ${error}`);

            throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode||500);    
        }
    }

    async updateDept(id,dept)
    {
        try {
            console.log("Inside deptService.js -> updateDept method");
            

            /*Finding Dept by id and updating it*/
            await model.findByIdAndUpdate(id,dept);
                        
            return {
                status : true,
                message :"updated Successfullly"
            };
        } catch (error) {
            console.log(`error in the deptService.js -> updateDept ${error}`);

            throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode||500);    
        }
    }
}

module.exports = new deptService();