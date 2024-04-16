
const jwt=require("jsonwebtoken")

exports.auth=async(req,res)=>{
    try{
    const token=req.body.token||req.header("Authorisation").replace("Bearer","")
    if(!token){
        res.status(403).json({
            success: false, message: `Token Missing` 
        })
    }
    try{
    const verify=jwt.verify(token,process.env.JWT_KEY)
    console.log(verify)
    req.user=verify
  next()
    }

catch(error){
       return res.status(403).json({
            success: false, message: `Token Invalid` 
        })

    }}
    catch(error){
      return  res.status(403).json({
            success: false, message: `AUTHENTICATION FAILED` 
        })  
    }
}