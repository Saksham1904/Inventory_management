const con=require("../database/database")
const jwt=require("jsonwebtoken")

exports.login=async(req,res)=>{
    const {email,password}=req.query
   
  
   
con.query("SELECT * from users where email=?",[email],(error,result)=>{
    try{
        if (error) throw error
         
       
        const jsontoken=jwt.sign({
            email:email,userid:result[0].uid
        },process.env.JWT_KEY,{
            expiresIn:Math.floor(Date.now() / 1000) + (60 * 60)
        })
        res.status(200).json({
            success:true,
            result,
            jsontoken
        })

    }catch(error){
        console.log(error)
        res.status(403).json({
            success:false,
            error
        })
    
    }
        
        
    })


}