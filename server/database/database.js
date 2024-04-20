const mysql=require("mysql2")
const con=mysql.createPool({
    user:"root",
    host:"127.0.0.1",
    password:"201922",
    database:"inventory"
})
module.exports=con
