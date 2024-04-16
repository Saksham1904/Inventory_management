const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
         unique:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
    },
    password:{
        type:String,
    },
    token:{
        type:String,
    }

})
module.exports=mongoose.model("user",userschema)