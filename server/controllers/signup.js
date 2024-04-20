

const bcypt=require("bcrypt")
//const jwt=require("jsonwebtoken")
//const user=require("../models/user")
const dotenv=require("dotenv")
dotenv.config()
const con=require("../database/database")





exports.signup=async(req,res)=>{
    // try{
    // const{username,fullname,email,phn,password}=req.body;
    // if(!username||!fullname||!email||!phn||!password){
    //     return res.status(403).send({
    //         success:false,
    //         message:"all fields not set",
    //     })
    // }
   
    // const existing=await user.findOne({email})
    // if(existing){
    //     return res.status(403).send({
    //         success:false,
    //         message:"user already exist",
    //     })
    // }
    
    // const hash=await bcypt.hash(password,10)
    // const profile=await user.create({
    //     username,fullname,email,phn,password:hash
    // })
    // return res.status(200).json({
    //     success:true,
    //     message:profile
    // })










    // } 
    // catch(error){
    //     console.log(error)
    //     return res.status(400).json({
    //         message:"user not created"
    //     })

    // }
    
    
    try{
        const{email,password}=req.body;
       con.query("SELECT * FROM POKE WHERE name=? OR name=? ",["sak","rythm"],(error,result)=>{
           if(error) throw error;
           console.log(result)
           res.status(200).json({
            status:true,
            result,
           })
        })
   
   
       }
       catch(error)
       {
           console.log(error)
       }


}






exports.login=async(req,res)=>{
    try{
        
        const{email,password}=req.body;
        // if(!email||!password)(
        //  res.status(403).json({
        //         message:"all fields not set",
        //     })
        // )
        const res=[]
        con.query("select password,uid from users where email=?",[email],(error,result)=>{
            if(error) throw error
            console.log(result)
           
    //     if(!check){
    //         res.status(403).json({
    //             message:"user not exist",
    //         })
    //     }

    //     const pass=await bcypt.compare(password,check.password)
    //     if(!pass){
    //       return  res.status(403).json({
    //             message:"Password is incorrect",
    //         })
    //     }
       

    // check.token=jsontoken;
    // check.password=undefined;


//    return res.status(200).json({
//             success: true,
//             res,
          
//             message: "User registered successfully",

    })}
    catch(error){
        console.log(error)
        return res.status(403).json({
            success: false,
            
            message: "User not registered successfully",

    })
    }

}

