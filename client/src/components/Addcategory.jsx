import React from "react";
import { useState } from "react";
import { endpoint } from "../services/api";
import { apiconnector } from "../services/apiconnector";
import { storage } from "../firebase";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import product from "../slices/product";
// import { addcategory, productadd } from "../services/operation";
import { useSelector } from "react-redux";
import Sidescroll from "./Sidescroll";
// import Topbar from "./Topbar";

const Addcategory = () => {
  const { token }= useSelector((state) => state.product);
  const [data, setdata] = useState({
    name: "",
    des: "",
    category: "",
    price: "",
    discount: "",
    quantity: "",
    image: "",
  });

//   const [imageUpload, setImageUpload] = useState(null);
//   const { category } = useSelector((state) => state.product);

 

//   const imageuploader = async () => {
//     if (!imageUpload) {
//       console.error("No image selected.");
//       return;
//     }
//     const imageRef = ref(storage, `images/${imageUpload.name}`);
//     const snap = await uploadBytes(imageRef, imageUpload);
//     const imageUrl = await getDownloadURL(snap.ref);
//     return imageUrl;
//   };

  const sumbithandler = async (event) => {
    event.preventDefault();
    console.log(data);
    setdata({ name: ""});
    // const image = await imageuploader();
    // console.log(image);

    // await productadd(
    //   data.name,
    //   data.category,
    //   data.discount,
    //   data.price,
    //   data.quantity,
    //   data.des,
    //   image,token
    // );
    // setdata({
    //   name: "",
    //   des: "",
    //   category: "",
    //   price: "",
    //   discount: "",
    //   quantity: "",
    // });
    // setImageUpload("")
  };

  const changehandler = (event) => {
    setdata((predata) => {
      return {
        ...predata,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="flex bg-steelwhite">
      <Sidescroll/>
      {/* <Topbar/> */}
      <div className="font-outfit text-dgreen relative bg-white w-[376px] h-[210px] py-6 pl-4 ml-[33px] mt-[124px] rounded-lg">
        <p className="font-semibold text-2xl">ADD NEW CATEGORY</p>
        <form onSubmit={sumbithandler} className="mt-6 text-base flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Category Name"
            name="name"
            value={data.name}
            onChange={changehandler}
            className="px-3 py-2 w-[320px] h-[46px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          />
          
          <button className="font-medium w-[132px] h-[46px] py-[10px] px-4 bg-bluee text-white rounded-full">Add category</button>
        </form>
      </div>
    </div>
  );
};
export default Addcategory;






