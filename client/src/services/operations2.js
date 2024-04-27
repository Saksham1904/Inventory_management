import { endpoint } from "./api";
import { apiconnector } from "./apiconnector";
import { toast } from "react-hot-toast";

export async function addsales(name, quantity, totalprice, date) {
  const { ADDSALE_API } = endpoint;
const pid=5
  try {
    const response = await apiconnector("POST", ADDSALE_API, {
      name,
      quantity,
      totalprice,
      date,
    });
    console.log(response);
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
  }
}

export async function getsales() {
  const { GETSALES_API } = endpoint;

  try {
    const response = await apiconnector("GET", GETSALES_API);
    
    return (response?.data.result);
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
  }
}

export async function deletesales(id) {
  const { DELETESALE_API } = endpoint;
  

  try {
    const response = await apiconnector("DELETE", DELETESALE_API,{id});
    console.log(response);
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
  }
}


export async function getcategorydata() {
    const { GETCATEGORYDATA_API } = endpoint;
  
    try {
      const response = await apiconnector("GET", GETCATEGORYDATA_API);
      
      return (response?.data.result);
    } catch (error) {
      console.log("DATA NOT ADDED ERROR............", error);
    }
  }
  
  
export async function deletecategory(id) {
    const { DELETECATEGORY_API } = endpoint;
    
  
    try {
      const response = await apiconnector("DELETE", DELETECATEGORY_API,{id});
      console.log(response);
    } catch (error) {
      console.log("DATA NOT ADDED ERROR............", error);
    }
  }