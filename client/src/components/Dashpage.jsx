import React, { useState } from "react";
import Sidescroll from "./Sidescroll";
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { setcategory } from "../slices/product";
import { categorydata } from "../services/operation";
import { useEffect } from "react";
import { productdata } from "../services/operation";
import Table from "./Table";
import productIcon from "../assets/Products.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const Dashpage = () => {
  const [buttonclick, setbuttonclick] = useState(true);
  const dispatch = useDispatch();
  const [category, setcat] = useState([]);
  const [form, setform] = useState({ search: "", category: "" });
  const [product, setproduct] = useState([]);
  const [refresh, setrefresh] = useState(true);

  async function fetch() {
    const res = await categorydata();
    dispatch(setcategory(res));
    setcat(res);
  }
  //call for total category
  useEffect(() => {
    if (refresh) {
      fetch();
      setrefresh(false);
    }
  }, [refresh]);

  //call for product data
  useEffect(() => {
    const fetch = async () => {
      const response = await productdata(form.search, form.category);
      setform({ search: "", category: "" });
      setproduct(response);
    };
    if (buttonclick) {
      setbuttonclick(false);
      fetch();
    }
  }, [buttonclick]);

  const headings = [
    { key: "name", label: "Name" },
    { key: "price", label: "Price" },
    { key: "description", label: "Description" },
    { key: "quantity", label: "Quantity" },
    { key: "discount", label: "Discount" },
    { key: "category", label: "Category" },
  ];
 
  return (
    <div className="flex bg-steelwhite overflow-hidden">
      <div className="">
        {" "}
        {/* Adjust width as needed */}
        {/* Content for the first div */}
        <Sidescroll />
      </div>
      <div className="absolute w-screen">
        {" "}
        {/* Adjust width as needed */}
        {/* Content for the second div */}
        <Topbar setbuttonclick={setbuttonclick} form={form} setform={setform} />
        <Table heading={headings} data={product} setproduct={setproduct} />
      </div>
      <div className="flex mt-[108px] ml-[108px] w-2/3 justify-evenly">
        <div className="bg-white rounded-[10px] w-[240px] h-[150px] flex items-center font-outfit">
          {/* Blue section with icon */}
          <div className="bg-bluee w-1/3 h-full flex justify-center items-center rounded-l-[10px]">
            {/* Icon */}
            <FontAwesomeIcon icon={faBox} className="text-white w-8 h-8" />
          </div>
          {/* Text displaying total products */}
          <div className="w-2/3 text-dgreen text-center">
            {/* Total products */}
            <p className="text-2xl font-medium">100</p>
            {/* "Products" text */}
            <p className="opacity-[61.8%] text-base">Products</p>
          </div>
        </div>
        <div className="bg-white rounded-[10px] w-[240px] h-[150px] flex items-center font-outfit">
          {/* Blue section with icon */}
          <div className="bg-bluee w-1/3 h-full flex justify-center items-center rounded-l-[10px]">
            {/* Icon */}
            <FontAwesomeIcon icon={faLayerGroup} className="text-white w-8 h-8"/>
          </div>
          {/* Text displaying total products */}
          <div className="w-2/3 text-dgreen text-center">
            {/* Total products */}
            <p className="text-2xl font-medium">100</p>
            {/* "Products" text */}
            <p className="opacity-[61.8%] text-base">Categories</p>
          </div>
        </div>
        <div className="bg-white rounded-[10px] w-[240px] h-[150px] flex items-center font-outfit">
          {/* Blue section with icon */}
          <div className="bg-bluee w-1/3 h-full flex justify-center items-center rounded-l-[10px]">
            {/* Icon */}
            <FontAwesomeIcon icon={faPiggyBank} className="text-white w-8 h-8"/>
          </div>
          {/* Text displaying total products */}
          <div className="w-2/3 text-dgreen text-center">
            {/* Total products */}
            <p className="text-2xl font-medium">100</p>
            {/* "Products" text */}
            <p className="opacity-[61.8%] text-base">Sales</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashpage;
