const express = require("express")
const router = express.Router()

const {addinvt}=require("../controllers/invtadd")
const {addcategory}=require("../controllers/category")
const{getallcategory}=require("../controllers/category")
const {searchproduct}=require("../controllers/category")
const {login}=require("../controllers/login")

router.get("/login",login)
router.post("/add",addinvt)
router.post("/addcategory",addcategory)
router.get("/getallcategory",getallcategory)
router.get("/search",searchproduct)



module.exports=router


