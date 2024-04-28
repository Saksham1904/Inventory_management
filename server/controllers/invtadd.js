

const con=require("../database/database")

exports.addinvt=async(req,res)=>{
    try{
    const{name,price,des,category,discount,quantity,image}=req.body;
    const {userid}=req.user
    console.log(category)
    const product=[name, price, quantity, discount, des, category,userid,image]
    console.log(product)

    con.query("INSERT INTO product(name, price, quantity, discount, description, cid,userid,image) values (?)",[product],(error,result)=>{
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


exports.deleteproduct=async(req,res)=>{
    try{
        const {id}=req.body
        
        if(!id){
            throw error
        }
        con.query("DELETE FROM product WHERE id=? ",[id],(error,result)=>{
            if(error) throw error
            console.log(result)
            res.status(200).json({
                success:true,
                result,
                message:"PRODUCT DELETED...."
            })

        })


    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"PRODUCT NOT DELETED...."
        })

    }
}



exports.updateproduct=async(req,res)=>{
    try{
    const {id,name, price, quantity, discount, des, category,image}=req.body
    const {userid}=req.user
    let sql="UPDATE product SET "
    const value=[]
    if(name)
    {
        sql+="name=?"
        value.push(name)
    }
    if(price)
    {
        sql+="price=?"
        value.push(price)
    }
    if(quantity)
    {
        sql+="quantity=?"
        value.push(quantity)
    }
    if(des)
    {
        sql+="description=?"
        value.push(des)
    }
    if(quantity)
    {
        sql+="quantity=?"
        value.push(quantity)
    }
    if(discount){
        sql+="discount=?"
        value.push(discount)
    }
    if(category){
        sql+="category=?"
        value.push(category)
    }
    if(image){
        sql+="image=?"
        value.push(image)
    }
    
    sql+=" where id=? && userid=?"
    value.push(id)
    value.push(userid)
  
    con.query(sql,value,(error,result)=>{
     if(error) throw error
     console.log(result)
     res.status(200).json({
        success:true,
        result,
        message:"PRODUCT UPDATED...."
    })
    })
   
   
   

    }
    catch(error){
        console.log(error)
        res.status(403).json({
            success:false,
            message:"PRODUCT NOT UPDATED...."
        })

    }



}



