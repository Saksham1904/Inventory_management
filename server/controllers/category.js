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
    console.log(error)
    res.status(403).json({
        status:false,
        message:"category not added"
       })
}
}


exports.getallcategory=async(req,res)=>{
      con.query("SELECT name FROM category",(error,result)=>{
        if(error) throw error
        console.log(result)
        res.status(200).json({
            status:true,
            result,
           })
      })
}

exports.searchproduct=async(req,res)=>{
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
