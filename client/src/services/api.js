const BASE_URL="http://localhost:4000"

export const endpoint={
   LOGIN_API:BASE_URL+"/login",
   ADDINVT_API:BASE_URL+"/add",
   SIGNUP_API:BASE_URL+"/signup",

   GETCATINVT_API:BASE_URL+"/search",
   CATEGORY_API:BASE_URL+"/getallcategory",
   ADDCATEGORY_API:BASE_URL+"/addcategory",
   DELETEPRODUCT_API:BASE_URL+"/deleteproduct",

   ADDSALE_API:BASE_URL+"/addsales",
   DELETESALE_API:BASE_URL+"/deletesales",
   GETSALES_API:BASE_URL+"/getsales",
   
   GETCATEGORYDATA_API:BASE_URL+"/productcategory",
   DELETECATEGORY_API:BASE_URL+"/deletecategory",
  

    TOTALSALE_API:BASE_URL+"/totalsale",
    TOTALPRODUCT_API:BASE_URL+"/totalproduct",
    TOTALCATEGORY_API:BASE_URL+"/totalcategory"

}
