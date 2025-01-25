const service = require("./deptService");

class deptController 
{
    async createdeptController(req,res,data)
    {
        try {
            await service.createDeptService(data);
            res.send("created").status(201);
        } catch (error) {
            console.log(`error in controller ${error}`);
        }
    }

    async getAllDeptController(req,res)
    {
        try {
           const data = await service.getAllDeptService();
           res.send(data);
        } catch (error) {
            console.log(`error in controller ${error}`);
        
        }
    }

    async updateDeptController(req,res,id,dept)
    {
        try {
            await service.updateDeptService(id,dept);
            res.send("updated dept details");
        } catch (error) {
            console.log(`error in controller ${error}`);
        }
    }
}
module.exports = new deptController();