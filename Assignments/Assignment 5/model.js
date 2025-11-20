const mongoose =require("mongoose")

const stdschema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
})

module.exports=mongoose.model("student",stdschema)