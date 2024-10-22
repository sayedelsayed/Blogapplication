const { timeStamp } = require('console');
const mongoose=require('mongoose');
const { type } = require('os');

const newSchema=mongoose.Schema({
    title:String,
    desc:String,
    createdBy:{type:mongoose.SchemaTypes.ObjectId,ref:"user"}
},{timeStamp:true})
module.exports=mongoose.model('new',newSchema);