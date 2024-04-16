

const cloudinary=require("cloudinary").v2




const fileupload=async(file,folder)=>{
    try{
    const options={folder}
     const response=await cloudinary.uploader.upload(file.tempFilePath,options)
    const url=response.url
    return url;
    
    }
    
    catch(error){
        console.log(error)
    }
}


exports.addinvt=async(req,res)=>{
    try{
    const{name,price,des,category,discount,quantity,image}=req.body;
    

    // const supportfiletype=["png","jpeg","jpg"]
    // const filetype=file.name.split(".")[1].toLowerCase()

    // if(!(supportfiletype.includes(filetype))){
    //     res.status(400).json({
    //         sucess:false,
    //         message:"file type not supported",
    //     })
    // }
    // const url=fileupload(file,"saksham")
    // console.log(url);
    res.status(200).json({
        success:true
    })
    }
    catch(error){
        console.log(error)
        res.status(403).json({
            success:false
        })

    }

}








