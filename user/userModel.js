const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
fullName :
{
    type : String,
    required : true,
    unique : true
},
mobileNo : {
    type : Number,
    required : true,
    unique : true
},
email :
{
    type : String,
    required : true,
    unique : true
},
password : {
    type : String
}
});
 const userModel = mongoose.model("user",userSchema);

 module.exports = userModel;