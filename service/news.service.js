const newsModel=require('../models/news.model');
const userModel=require('../models/user.model');
//const jwt=require("jsonwebtoken")

module.exports.addNew= async(req,res)=>{
    const{title,desc,createdBy}=req.body;
    await newsModel.insertMany({title,desc,createdBy:req.id});
    res.json({message:"Done"})
        }     
        

    module.exports.getAll= async(req,res)=>{
        let news=await newsModel.find({});
        res.json({message:"ok",news})
    }

    module.exports.userNews= async(req,res)=>{
        const createdBy=req.header('id')
        let news=await newsModel.find({createdBy});
        res.json({message:"ok",news})
    }

    module.exports.update = async(req,res)=>{
        const{_id,title,desc}=req.body;
      // const s= await newsModel.find({id});
    
        await newsModel.findByIdAndUpdate({_id},{title,desc});
        res.json({message:"Done"})         
            
    }

    
    module.exports.update = async(req,res)=>{
        const{_id,title,desc}=req.body;
      // const s= await newsModel.find({id});
    
        await newsModel.findByIdAndUpdate({_id},{title,desc});
        res.json({message:"Done"})         
            
    }
    