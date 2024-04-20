

import { endpoint } from "./api"
import { apiconnector } from "./apiconnector";
import { toast } from "react-hot-toast"
import { setloading,settoken } from "../slices/product";
export async function categorydata(){

  const { CATEGORY_API } = endpoint;
  try {
    const response = await apiconnector("GET", CATEGORY_API);
    console.log(response?.data.result);
    // if (!response.data.success) {
    //   throw new Error(response.data.message);
    // }
    return (response?.data.result)
  }
  catch (error) {
    console.log(error);
  }

}


export async function productdata(name, category) {

  if (category == "ALL") {
    category = ""
  }
  const { GETCATINVT_API } = endpoint
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiconnector("GET", GETCATINVT_API, null, null, { name: name, category: category })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch DATA")
    }
    result = response?.data?.result
    toast.success("DATA FETCHED")
    console.log(result)
  } catch (error) {
    console.log("DATA NOT FETCHED ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result

}


export async function productadd(name, category, discount, price, quantity, des,image) {

  const { ADDINVT_API } = endpoint
  const toastId = toast.loading("Loading...")
  console.log(image)
  try {
    const response = await apiconnector("POST", ADDINVT_API, { name, category, discount, price, quantity, des,image })
    console.log(response)
    toast.success("PRODUCT ADDED")
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)


}


export async function addcategory(category){
 
  const {ADDCATEGORY_API}=endpoint
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiconnector("POST", ADDCATEGORY_API, {category})
    console.log(response)
    toast.success("CATEGORY ADDED")
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)

  
}




// export const login=async(email,password,navigate)=>{
//   return async (dispatch) => {
//     const {LOGIN_API}=endpoint
//     const toastId = toast.loading("Loading...")
//     dispatch(setloading(true))
//     try {
//       const response = await apiconnector("GET", LOGIN_API, null,null,{
//         email:email,
//         password:password,
//       })

//       console.log("LOGIN API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Login Successful")
//       dispatch(settoken(response.data.token))
      
     
      
//       localStorage.setItem("token", JSON.stringify(response.data.token))
//       localStorage.setItem("user", JSON.stringify(response.data.user))
//       navigate("/dashboard")
//     } catch (error) {
//       console.log("LOGIN API ERROR............", error)
//       toast.error("Login Failed")
//     }
//     dispatch(setloading(false))
//     toast.dismiss(toastId)
//   }
// }