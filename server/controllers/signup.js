const dotenv = require("dotenv");
dotenv.config();
const con = require("../database/database");

exports.signup = async (req, res) => {
  try {
    const { fullname, email, phn, password } = req.body;
    if (!fullname || !email || !phn || !password) {
      return res.status(403).send({
        success: false,
        message: "all fields not set",
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
        const hash = await bcypt.hash(password, 10);
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
