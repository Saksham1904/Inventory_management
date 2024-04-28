const con=require("../database/database")


exports.product=async(req,res)=>{
    try{
        con.query("SELECT COUNT(*) AS product_count FROM product",(error,result)=>{
            if(error) throw error
            res.status(200).json({
                status:true,
                result
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
exports.sale=async(req,res)=>{
    try{
        con.query("SELECT SUM(totalprice) AS pricesum FROM sale",(error,result)=>{
            if(error) throw error
            res.status(200).json({
                status:true,
                result
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
exports.category=async(req,res)=>{
    try{
        con.query("SELECT count(*) AS category FROM category",(error,result)=>{
            if(error) throw error
            res.status(200).json({
                status:true,
                result
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

