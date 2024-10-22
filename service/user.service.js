const jwt=require("jsonwebtoken")
//const { use } = require('../api/user.api');
const userModel=require('../models/user.model');
const bcrypt=require("bcrypt");

module.exports.signup= async(req,res)=>{    
        const{name,email,password,age}=req.body;
    const isfound=await userModel.findOne({email});
    if(isfound) return res.json({message:"email is aready exists"})
        bcrypt.hash(password,4 ,async function (err,hash) {
            await userModel.insertMany({name,email,password:hash,age});
            res.json({message:"Done"})         
        })
}

module.exports.signin= async(req,res)=>{ 
const{email,password}=req.body;
let user=await userModel.findOne({email});
console.log(user)
if(user)
    { 
        const validPassword = await bcrypt.compare(password, user.password);
        if( validPassword )
        {
            //payload, secretkey
        let Token= jwt.sign({role:'user',userId:user._id,name:user.name},"sayed")            
        res.json({message:"success" ,Token})
        }
        else
        {
    res.json({message:"password or email is not correcet"})       
        }
    }
else{
    res.json({message:"email isnot found"})
}   
}
