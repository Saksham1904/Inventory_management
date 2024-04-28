const express = require("express")
const router = express.Router()

const {addinvt, updateproduct}=require("../controllers/invtadd")
const {addcategory, deletecategory, getcategorydata}=require("../controllers/category")
const{getallcategory}=require("../controllers/category")
const {searchproduct}=require("../controllers/category")
const {login}=require("../controllers/login")
const {deleteproduct}=require("../controllers/invtadd")
const { signup, bill } = require("../controllers/signup")
const {auth}=require("../middlewares/auth")
const { getsale, deletesale, addsale } = require("../controllers/sales")
const { product, sale, category } = require("../controllers/dashboard")

router.get("/login",login)
router.post("/signup",signup)


router.post("/add",auth,addinvt)
router.post("/addcategory",addcategory)
router.delete("/deleteproduct",deleteproduct)

router.get("/search",searchproduct)
router.put("/update",auth,updateproduct)

router.get("/getallcategory",getallcategory)
router.delete("/deletecategory",deletecategory)
router.post("/bill",bill)


router.get("/getsales",getsale)
router.delete("/deletesales",deletesale)
router.post("/addsales",addsale)

router.get("/productcategory",getcategorydata)


router.get("/totalproduct",product)
router.get("/totalsale",sale)
router.get("/totalcategory",category)

module.exports=router


