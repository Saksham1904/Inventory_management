const con=require("../database/database")


exports.addsale=async(req,res)=>{
    try{
        const {name,quantity,totalprice,date,currquantity,id}=req.body
        const sale=[name,quantity,totalprice,date]
        con.query("UPDATE product SET quantity = ? WHERE id = ?",[currquantity,id],(error,result)=>{
            if(error) throw error
            console.log(result)
        })
         con.query("insert into sale (name,quantity,totalprice,date) values (?)",[sale],(error,result)=>{
            if(error) throw error
            console.log(result)
            res.status(200).json({
                status:true,
                result,
               })
           })
        

    }
    catch(error){
        console.log(error)
        res.status(403).json({
            success:false
        })
    }
}

exports.deletesale=async(req,res)=>{
    try{
        const {id}=req.body
        console.log(id)
        
        
        if(!id){
            throw error
        }
        con.query("DELETE FROM sale WHERE id=? ",[id],(error,result)=>{
            if(error) throw error
            console.log(result)
            res.status(200).json({
                success:true,
                result,
                message:"SALES DELETED...."
            })

        })


    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"SALES NOT DELETED...."
        })

    }
}


exports.getsale=async(req,res)=>{
 try{
    con.query("SELECT * from sale",(error,result)=>{
        if(error) throw error
        res.status(200).json({
            success:true,
            result,
            message:"SALES FETECHED...."
        })

    })
 }
 catch(error){
    res.status(403).json({
        success:false,
        message:"SALES NOT Fetched...."
    })

 }
}




