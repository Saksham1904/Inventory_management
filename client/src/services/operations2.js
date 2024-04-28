import { endpoint } from "./api";
import { apiconnector } from "./apiconnector";
import { toast } from "react-hot-toast";

export async function addsales(name,id, currquantity,quantity, totalprice, date) {
  const toastId = toast.loading("Loading...");
  const { ADDSALE_API } = endpoint;
 
  try {
    const response = await apiconnector("POST", ADDSALE_API, {
      name,
      quantity,
      totalprice,
      date,
      currquantity,id
    });
    console.log(response);
    toast.success("SALES ADDED");
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
}

export async function getsales() {
  const { GETSALES_API } = endpoint;

  try {
    const response = await apiconnector("GET", GETSALES_API);

    return response?.data.result;
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
  }
}

export async function deletesales(id) {
  const toastId = toast.loading("Loading...");
  const { DELETESALE_API } = endpoint;

  try {
    const response = await apiconnector("DELETE", DELETESALE_API, { id });
    console.log(response);
    toast.success("SALES DELETED");
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId)
}

export async function getcategorydata() {
  const { GETCATEGORYDATA_API } = endpoint;

  try {
    const response = await apiconnector("GET", GETCATEGORYDATA_API);

    return response?.data.result;
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
  }
}

export async function deletecategory(id) {
  const toastId = toast.loading("Loading...");
  const { DELETECATEGORY_API } = endpoint;

  try {
    const response = await apiconnector("DELETE", DELETECATEGORY_API, { id });
    console.log(response);
    toast.success("CATEGORY DELETED");
  } catch (error) {
    console.log("DATA NOT ADDED ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId)
}



