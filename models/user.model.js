const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,requireed:"true",
        unique: [true, 'email already exists']},
    password:String,
    age:Number
})
module.exports=mongoose.model('user',userSchema);