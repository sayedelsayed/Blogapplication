const jwt= require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const Token=req.header("Token")
    jwt.verify(Token,"sayed",async function(error,decoded) {

        if(error){
            res.json({message:"eror token not provided "})
        }
    else
    {
        req.id=decoded.userId
         console.log(req.id)
            next()
        }})    
}