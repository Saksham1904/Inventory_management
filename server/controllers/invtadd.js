

const con=require("../database/database")

exports.addinvt=async(req,res)=>{
    try{
    const{name,price,des,category,discount,quantity}=req.body;
    const product=[name, price, quantity, discount, des, category]
    con.query("INSERT INTO product(name, price, quantity, discount, description, category) values (?)",[product],(error,result)=>{
        if(error) throw error;
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








