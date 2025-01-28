const userModel = require("./userModel");
const customError = require("../ErrorHandlers/customError");
class userService 
{
    async createUser(userObject)
    {
       try {
        console.log("Inside User Service -> CreateUser Method");


        /*Creating a new User */
        const user = new userModel(userObject);


       if(!user) throw new customError("User Not Created",400);
        await user.save();

        
        return{
            messsage : "User Created",
            statusCode : 201
        };
       } catch (error) {
        console.log(` Error in UserServer.js file, message :  ${error.message}`);

        /*Dupliacation error -> user details already exist in the database*/
        if(error.code === 11000) throw new customError(`Details Arlready exists.value Should be unique .Duplicate Field : ${Object.keys(error.keyValue)}`,400);

        throw new customError((error instanceof customError)?error.message:"Error: Please Try Again",error.statusCode);    
       }
    }

    async getALlUsers()
    {
        try {
            console.log("Inside User Service -> getAllUsers Method");


            /*Retriving all the user data */
            const data =  await userModel.find();
        
        
        if(!data) throw new customError("Error While Retriving Data",500);

        return {
            status : true,
            userData : data
        }
        } catch (error) {

            console.log(` Error in UserServer.js file, message :  ${error.message}`);

            throw new customError((error instanceof customError)?error.message:"Error  please try again",error.statusCode);    
        }
    }

    async updateUser(id,user)
    {
        try {
            console.log("Inside User Service -> updateUser Method");

            /*Updating user By using ID and User Object*/
            const data = await userModel.findByIdAndUpdate(id,user);
           
            if(!data) throw new customError("User Not Found",404);

            return(
                {
                    status : true,
                    message : "Succesfully Updated"
                }
            );
        } catch (error) {

            console.log(`Error in userServer.js message : ${error} `);

            throw new customError((error instanceof customError)?error.message:"Error  please try again",error.statusCode);    
        }
    }
}

module.exports = new userService();