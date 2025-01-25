const mongoose = require("mongoose");

const deptSchema = mongoose.Schema({
    name :{
        type : String,
        required :true
    },
    accId: {
        type : mongoose.SchemaTypes.ObjectId,
        ref :"account",
        required : true
    },status:
    {
        type : String,
        enum :["Active","InActive"],
        default : "InActive",
    }
});

const model = mongoose.model("dept",deptSchema);

module.exports = model;