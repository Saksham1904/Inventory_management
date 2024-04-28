import React from "react";
import { useState } from "react";
import { endpoint } from "../services/api";
import toast from "react-hot-toast";
import { apiconnector } from "../services/apiconnector";
const Addcategory = (props) => {
  const [category, setname] = useState(null);

  async function handleclick() {
    const { ADDCATEGORY_API } = endpoint;
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiconnector("POST", ADDCATEGORY_API, {
        category,
      });
      console.log(response);
      toast.success("CATEGORY ADDED");
    } catch (error) {
      console.log("DATA NOT ADDED ERROR............", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
    setname("");
    props.setrefresh(true);
  }

  return (
    <div className="flex bg-steelwhite">
      <div className="font-outfit text-dgreen relative bg-white w-[376px] h-[210px] py-6 pl-4 ml-[33px] mt-[124px] rounded-lg">
        <p className="font-semibold text-2xl">ADD NEW CATEGORY</p>
        <div className="mt-6 text-base flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Category Name"
            value={category}
            onChange={(event) => {
              setname(event.target.value);
            }}
            className="px-3 py-2 w-[320px] h-[46px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          />

          <button
            onClick={handleclick}
            className="font-medium w-[132px] h-[46px] py-[10px] px-4 bg-bluee text-white rounded-full"
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  );
};
export default Addcategory;
