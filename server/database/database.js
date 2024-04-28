const mysql=require("mysql2")

const con=mysql.createPool({
    user:"root",
    host:"127.0.0.1",
    password:"S1d#P@ss",
    database:"final"
})
module.exports=con


