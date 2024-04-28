const dotenv = require("dotenv");
dotenv.config();
const con = require("../database/database");
const bcrypt=require("bcrypt")

exports.signup = async (req, res) => {
  try {
    const { fullname, email, phn, password ,adminpass} = req.body;
    if (!fullname || !email || !phn || !password || !adminpass) {
      return res.status(403).send({
        success: false,
        message: "all fields not set",
      });
    }
    if(adminpass!="Saksham"){
       res.status(403).send({
        success: false,
        message: "ADMIN PASS IS NOT MATCH",
      });
    }

    con.query(
      "SELECT email from user where email=?",
      [email],
      async (error, result) => {
        if (error) throw error;
        if (result.length != 0) {
          return res.status(403).send({
            success: false,
            message: "user already exist",
          });
        }
        const hash = await bcrypt.hash(password, 10);
        con.query(
          "INSERT INTO user (fullname,email,phone,password) values (?,?,?,?)",
          [fullname, email, phn, hash],
          (error, result) => {
            if (error) throw error;
            console.log(result);
            res.status(200).json({
              success: true,
              message: "USER CREATED",
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "user not created",
    });
  }
};


exports.bill=async(req,res)=>{

     const send=req.body
      console.log(send)
      const sql = 'INSERT INTO detail (name, quantity) VALUES ?';
     const values = send[0].map(item => [item.productName, item.quantity]);
     console.log(values)
     con.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Error inserting order data:', err);
       
      }
      console.log('Order data inserted successfully:', result);
      return res.status(200).json({
        success:true,
        message:"passed"
       })
  
   });
       
  };
    

