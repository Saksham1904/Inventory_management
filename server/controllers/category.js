const con=require("../database/database")



exports.addcategory=async(req,res)=>{
    try{
    const {category}=req.body
    console.log(category)
    con.query("INSERT INTO category (name) VALUES (?)",category,(error,result)=>{
        if (error) throw error
        console.log(result)
        res.status(200).json({
            status:true,
             category,
           })
    })
}catch(error){
  
    res.status(403).json({
        status:false,
        message:"category not added"
       })
}
}


exports.getallcategory=async(req,res)=>{
  try{
      con.query("SELECT name FROM category",(error,result)=>{
        if(error) throw error
        console.log(result)
        res.status(200).json({
            status:true,
            result,
           })
      })
    }
    catch(error){
      res.status(403).json({
        success:false,
        message:"CATEGORY CANT FETCH"
      })
    }
}


exports.deletecategory=async(req,res)=>{
  try{
    const {name}=req.body
   con.query("delete from product where category=?",[name],(error,result)=>{
    if(error) throw error
    console.log(result)    
    })
    con.query("DELETE FROM category WHERE name = ?",[name],(error,result)=>{
      if(error) throw error
      console.log(result)
      res.status(200).json({
          status:true,
          result,
         })
    })
  }
  catch(error){
    res.status(403).json({
      success:false,
      message:"CATEGORY CANT DELETE"
    })
  }

}


exports.searchproduct=async(req,res)=>{
  try{
    const { category, name } = req.query;
  let sql = 'SELECT * FROM product WHERE 1=1'; // Always true condition to start the WHERE clause

  const values = [];

  if (category) {
    sql += ' AND Category = ?';
    values.push(category);
  }

  if (name) {
    sql += ' AND Name LIKE ?';
    values.push(`%${name}%`);
  }
  con.query(sql,values,(error,result)=>{
    if(error) throw error
    console.log(result)
    res.status(200).json({
        success:true,
        result
    })
  })
}
catch(error){
  res.status(403).json({
    success:false,
    message:"product data cant fetch"
  })
}
}

