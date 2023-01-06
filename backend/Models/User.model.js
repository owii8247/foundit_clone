const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String , required:true},
    password:{type:String , required :true,min:4},
    mobile:{type:String, required:true },
    work_status:{type:String,required:true ,default:"fresher"}
}) 

const userModel = mongoose.model("user", userSchema);

module.exports={
    userModel

}