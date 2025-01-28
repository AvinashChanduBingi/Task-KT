const mongoose = require("mongoose");

const accountschema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    }
});

const model = mongoose.model("account",accountschema);

module.exports = model;