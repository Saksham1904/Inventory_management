import React, { useState } from "react";
import Sidescroll from "./Sidescroll";
import Topbar from "./Topbar";
import { useDispatch } from "react-redux";
import { setcategory } from "../slices/product";
import { categorydata } from "../services/operation";
import { useEffect } from "react";
import { productdata } from "../services/operation";
import Table from "./Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { apiconnector } from "../services/apiconnector";
import { endpoint } from "../services/api";

const Dashpage = () => {
  const [buttonclick, setbuttonclick] = useState(true);
const dispatch=useDispatch()
  const[data,setdata]=useState()
  const[c,setc]=useState()
  const[sale,setsale]=useState()
  const [form, setform] = useState({ search: "", category: "" });
  const [product, setproduct] = useState([]);
  const [refresh, setrefresh] = useState(true);
  const[newdata,setnewdata]=useState(true)

  async function fetch() {
   
    const res = await categorydata();
    dispatch(setcategory(res));  
  
  }
    useEffect(()=>{
      async function fetch(){
        const {TOTALSALE_API,TOTALPRODUCT_API,TOTALCATEGORY_API}=endpoint
        let res=await apiconnector("GET",TOTALPRODUCT_API)
        
        setdata(res?.data?.result[0].product_count)
        res=await apiconnector("GET",TOTALSALE_API)
        setsale(res?.data?.result[0].pricesum)
        res=await apiconnector("GET",TOTALCATEGORY_API)
        setc(res?.data?.result[0].category)
        
      }
if(newdata){
  setnewdata(false)
  fetch()
}
     
    },[newdata])




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
          <div>
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
            <p className="text-2xl font-medium">{data}</p>
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
            <p className="text-2xl font-medium">{c}</p>
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
            <p className="text-2xl font-medium">{sale}</p>
            {/* "Products" text */}
            <p className="opacity-[61.8%] text-base">Sales</p>
          </div>
        </div>
        </div>


        <Table heading={headings} data={product} setproduct={setproduct}  setnewdata={setnewdata}/>
      </div>
    </div>
    </div>
  );
};

export default Dashpage;
