const mongoose = require("mongoose");

const userAccountSchema = mongoose.Schema({
    accId :
    {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "account",
        required : true
    },
    userId :
    {
        type : mongoose.SchemaTypes.ObjectId,
        ref:"user",
        required : true
      
    },
    dept :[{ type : mongoose.SchemaTypes.ObjectId,
        ref:"dept"}]

    
});

const userAccountsModel = mongoose.model("userAccount",userAccountSchema);

module.exports = userAccountsModel;