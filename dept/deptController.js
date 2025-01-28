const service = require("./deptService");
const customError = require("../ErrorHandlers/customError");

class deptController 
{
    async createdept(req,res)
    {
        try {
            console.log("Inside deptControlletr.js -> createDept method");
             
            const result = await service.createDept(req.body);
            res.status(201).json(
                {
                    status: result.status,
                    message :result.message
                }
            )
        } catch (error) {
            console.log(`Error in deptController.js : createdept ${error}`);
    
            if(error instanceof customError)
            {
                return res.status(error.statusCode).json(
                    {
                        status : false,
                        message : error.message || this.error
                    }
                )
            }
            
            return res.status(500).json(
                {
                    status: false,
                    message :" Internal Server Error"
                }
            )
        }
    }

    async getAllDepts(req,res)
    {
        try {

            console.log("Inside deptControlletr.js -> getAllDepts method");

            /*retriving all documents of Dept*/
           const result = await service.getAllDepts();

         res.status(200).json(
            {
              status : result.status ,
              data :  result.deptdata 
            }
         )
           
        } catch (error) {
            console.log(`Error in deptController.js : getAllDepts method  ${error}`);
    
            if(error instanceof customError)
            {
                return res.status(error.statusCode).json(
                    {
                        status : false,
                        message : error.message || this.error
                    }
                )
            }
            
            return res.status(500).json(
                {
                    status: false,
                    message :" Internal Server Error"
                }
            ) 
        
        }
    }

    async updateDept(req,res)
    {
        try {
            console.log("Inside deptControlletr.js -> getAllDepts method");

            /*updating dept using Id */
            const result =await service.updateDept(req.query.id,req.body);


            res.status(200).json(
                {
                   status : result.status,
                message : result.message 
                }
            )
        } catch (error) {
            console.log(`Error in deptController.js : updateDept method  ${error}`);
    
            if(error instanceof customError)
            {
                return res.status(error.statusCode).json(
                    {
                        status : false,
                        message : error.message || this.error
                    }
                )
            }
            
            return res.status(500).json(
                {
                    status: false,
                    message :" Internal Server Error"
                }
            ) 
        }
    }
}
module.exports = new deptController();