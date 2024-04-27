const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.auth = async (req, res,next) => {
  try {
   
    const token =
      req.body.token || req.header("Authorisation").replace("Bearer", "");

    if (!token) {
      res.status(401).json({
        success: false,
        message: `Token Missing`,
      });
    }
    try {
      const decode = await jwt.verify(token, process.env.JWT_KEY);
      console.log(decode);
      req.user=decode
    } 
    catch (error) {
      return res.status(401).json({
        success: false,
        message: `Token Invalid`,
      })
    }
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: `AUTHENTICATION FAILED`,
    });
  }
};
