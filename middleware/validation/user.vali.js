const joi=require("joi");
let methdes=['body',"params"]
let Schema={body:joi.object({
    name:joi.string().required().min(3).max(12),
    email:joi.string().email().required(),
    password:joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),    
    repeat_password:joi.ref('password'),
    age:joi.number().min(16).max(50)}),
    params:joi.object({id:joi.string().required().min(4).max(4)})
}

    
module.exports.userValidattion=(req,res,next)=>{
    let errorArray=[];
    methdes.map((key)=>{
        let {error} = Schema[key].validate(req[key],{abortEarly:false});
        if(error){
            error.details.map((msg)=>{
                errorArray.push(msg.message);
            
            }) 
    }    })

    if(errorArray.length===0){next();}
    else{  res.json(errorArray)}  
}
    





/*
module.exports.userValidattion=(req,res,next)=>{
    let errorArray=[];
let {error} = Schema.validate(req.body,{abortEarly:false});
console.log(error);
if(!error)
{
    next()
}
else{
error.details.map((msg)=>{
    errorArray.push(msg.message);

})
    res.json(errorArray)
}
}
     */