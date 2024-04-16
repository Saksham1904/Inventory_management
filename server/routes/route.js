const express = require("express")
const router = express.Router()

const {addinvt}=require("../controllers/invtadd")


router.post("/add",addinvt)


module.exports=router


