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
      con.query("SELECT * FROM category",(error,result)=>{
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
    const {id}=req.body
  
    con.query("DELETE FROM category WHERE id = ?",[id],(error,result)=>{
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
  let sql = 'SELECT product.*,category.name AS category_name FROM product INNER JOIN category ON product.cid = category.id where 1=1'; // Always true condition to start the WHERE clause

  const values = [];

  if (category) {
    sql += ' AND product.cid = ?';
    values.push(category);
  }

  if (name) {
    sql += ' AND product.name LIKE ?';
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

exports.getcategorydata=async(req,res)=>{
  try{
    con.query("SELECT category.name AS category_name,COUNT(product.id) AS total_products,category.id as category_id FROM category LEFT JOIN product ON category.id = product.cid GROUP BY category.id;",(error,result)=>{
      if(error) throw error
      res.status(200).json({
        success:true,
        result
    })
    })
  }
  catch(error){
    res.status(403).json({
      success:false,
      message:"category data cant fetch"
    })
  }
}



