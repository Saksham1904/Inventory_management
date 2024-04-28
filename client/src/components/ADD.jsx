import React from "react";
import { useState } from "react";
import { endpoint } from "../services/api";
import { apiconnector } from "../services/apiconnector";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import product from "../slices/product";
import { productadd } from "../services/operation";
import { useSelector } from "react-redux";
import Sidescroll from "./Sidescroll";
// import Topbar from "./Topbar";

const ADD = () => {
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

  const [imageUpload, setImageUpload] = useState(null);
  const { category } = useSelector((state) => state.product);

 

  const imageuploader = async () => {
    if (!imageUpload) {
      console.error("No image selected.");
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    const snap = await uploadBytes(imageRef, imageUpload);
    const imageUrl = await getDownloadURL(snap.ref);
    return imageUrl;
  };

  const sumbithandler = async (event) => {
    event.preventDefault();
    console.log(data);
    const image = await imageuploader();
    console.log(image);

    await productadd(
      data.name,
      data.category,
      data.discount,
      data.price,
      data.quantity,
      data.des,
      image,token
    );
    setdata({
      name: "",
      des: "",
      category: "",
      price: "",
      discount: "",
      quantity: "",
    });
    setImageUpload("")
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
      <div className="font-outfit text-dgreen relative bg-white w-[744px] h-[427px] py-6 pl-4 ml-[33px] mt-[124px] rounded-lg">
        <p className="font-semibold text-2xl">ADD NEW PRODUCT</p>
        <form onSubmit={sumbithandler} className="mt-6 text-base">
          <input
            required
            type="text"
            placeholder="Product Name"
            name="name"
            value={data.name}
            onChange={changehandler}
            className="px-3 py-2 w-[320px] h-[46px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          />
          <input
            required
            type="textarea"
            placeholder="Description"
            name="des"
            value={data.des}
            onChange={changehandler}
            className="mt-2 px-3 py-2 w-[642px] h-[92px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100 active:text-wrap "
          />
          <div className="flex gap-[10px]">
            <label className="mt-2 flex  w-[320px] h-[46px] bg-grey rounded-2xl text-dgreen text-opacity-[61.8%] focus:outline-none focus:text-opacity-100 cursor-pointer">
            <span className="px-3 py-2 text-dgreen opacity-[61.8%]">Add Product Image</span>
            <input
              type="file"
              name="imageupload"
              onChange={(event) => { setImageUpload(event.target.files[0]) }}
              className="hidden"
            />
            </label>

          {/* <label htmlFor="category">SELECT CATEGORY</label> */}
          <select
            name="category"
            value={data.category}
            id="category"
            onChange={changehandler}
            className="mt-2 px-3 py-2 w-[320px] h-[46px] bg-grey rounded-2xl text-dgreen text-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          >
            <option value="">Select Category</option>

            {(category==null)?null:(category.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            )))}
          </select>
        </div>
        <div className="flex gap-[10px]">
          <input
            required
            type="text"
            placeholder="Price"
            name="price"
            value={data.price}
            onChange={changehandler}
            className="mt-2 px-3 py-2 w-[209px] h-[46px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          />
          <input
            required
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={data.quantity}
            onChange={changehandler}
            className="mt-2 px-3 py-2 w-[209px] h-[46px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          />
          <input
            required
            type="text"
            placeholder="Discount"
            name="discount"
            value={data.discount}
            onChange={changehandler}
            className="mt-2 px-3 py-2 w-[209px] h-[46px] bg-grey rounded-2xl text-dgreen placeholder-dgreen placeholder-opacity-[61.8%] focus:outline-none focus:text-opacity-100"
          />
        </div>
          <button className="font-medium mt-4 py-[10px] px-4 bg-bluee text-white rounded-full">Add product</button>
        </form>
      </div>
    </div>
  );
};
export default ADD;






