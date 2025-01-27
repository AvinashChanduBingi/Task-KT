const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
fullName :
{
    type : String,
    required : true
},
mobileNo : {
    type : Number,
    required : true 
},
email :
{
    type : String
},
password : {
    type : String
}
});
 const userModel = mongoose.model("user",userSchema);

 module.exports = userModel;