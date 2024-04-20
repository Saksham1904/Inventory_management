const con = require("../database/database");
const jwt = require("jsonwebtoken");
const bcypt=require("bcrypt")
const dotenv = require("dotenv");
dotenv.config();


exports.login = async (req, res) => {
  const { email, password } = req.query;
   

  con.query(
    "SELECT * from user where email=?",
    [email],
    async (error, result) => {
      try {
        if (error) throw error;
        console.log(result);
        if (result.length != 0) {
          const jsontoken = jwt.sign(
            {
              email: email,
              userid: result[0].id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: Date.now() + (60 * 60 * 1000),
            }
          );
          const pass = await bcypt.compare(password, result[0].password);
          if (!pass) {
            return res.status(403).json({
              message: "Password is incorrect",
            });
          }

          res.status(200).json({
            success: true,
            result,
            jsontoken,
          });
        } else {
          res.status(403).json({
            success: false,
            message: "user dont exist",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(403).json({
          success: false,
          error,
        });
      }
    }
  );
};


