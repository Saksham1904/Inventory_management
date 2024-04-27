import React, { useState } from "react";
import Sidescroll from "./Sidescroll";
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { setcategory } from "../slices/product";
import { categorydata } from "../services/operation";
import { useEffect } from "react";
import { productdata } from "../services/operation";
import Table from "./Table";

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
    <div className="flex">
      <div className="w-1/2 ">
        {" "}
        {/* Adjust width as needed */}
        {/* Content for the first div */}
        <Sidescroll />
      </div>
      <div className="w-1/9 ">
        {" "}
        {/* Adjust width as needed */}
        {/* Content for the second div */}
        <Topbar setbuttonclick={setbuttonclick} form={form} setform={setform} />
        <Table heading={headings} data={product} setproduct={setproduct} />
      </div>
    </div>
  );
};

export default Dashpage;
