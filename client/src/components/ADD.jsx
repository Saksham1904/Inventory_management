import React, { useEffect } from "react";
import { useState } from "react";
import { endpoint } from "../services/api";
import { apiconnector } from "../services/apiconnector";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import product from "../slices/product";
import { categorydata, productadd } from "../services/operation";
import { useSelector } from "react-redux";
import { getcategorydata } from "../services/operations2";

const ADD = () => {
  const { token }= useSelector((state) => state.product);
  const[category,setcategory]=useState(null)
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
    useEffect(()=>{
      async function fetch(){
        const res=await categorydata()
        console.log(res)
        setcategory(res)
      }
fetch()
    },[])

 

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
    <div>
      {
       
      }
      <form onSubmit={sumbithandler}>
        <input
          required
          type="text"
          placeholder="PRODUCT NAME"
          name="name"
          value={data.name}
          onChange={changehandler}
        />
        <input
          required
          type="text"
          placeholder="Product Price"
          name="price"
          value={data.price}
          onChange={changehandler}
        />
        <input
          required
          type="textarea"
          placeholder="Description"
          name="des"
          value={data.des}
          onChange={changehandler}
        />
        <input
          required
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={data.quantity}
          onChange={changehandler}
        />
        <input
          type="file"
          placeholder="ADD PRODUCT IMAGE"
          name="imageupload"
          onChange={(event)=>{setImageUpload(event.target.files[0])}}
        />
       <label htmlFor="category">SELECT CATEGORY</label>
      <select
        name="category"
        value={data.category}
        id="category"
        onChange={changehandler}
      >
        {(category==null)?null:(category.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        )))}
      </select>
        <input
          required
          type="text"
          placeholder="DISCOUNT"
          name="discount"
          value={data.discount}
          onChange={changehandler}
        />
        <button>SUMBIT</button>
      </form>
    </div>
  );
};
export default ADD;






