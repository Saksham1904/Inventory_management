import React from "react";
import { useState } from "react";
import { endpoint } from "../services/api";
import { apiconnector } from "../services/apiconnector";
import { login, send } from "../services/operation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setcategory, setloading, settoken } from "../slices/product";

const Form = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changehandler = (event) => {
    setdata((predata) => {
      return {
        ...predata,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sumbithandler = async (event) => {
    event.preventDefault();
    const { LOGIN_API } = endpoint;
    const toastId = toast.loading("Loading...");
    dispatch(setloading(true));
    try {
      const response = await apiconnector("GET", LOGIN_API, null, null, {
        email: data.email,
        password: data.password,
      });

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(settoken(response.data.jsontoken));

      localStorage.setItem("token", JSON.stringify(response.data.jsontoken));
      localStorage.setItem("user", JSON.stringify(response.data.result));
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setloading(false));
    toast.dismiss(toastId);

    console.log(data);
    setdata({ email: "", password: "" });
    navigate("/dashboard");
  };
  return (
    //value is added to maintain state of particular variable as change in usestate lead to rerender the jsx code
    <div className="bg-salylite">
      <div className="flex justify-center items-center h-screen flex-col">
        <form onSubmit={sumbithandler} className="bg-white w-[511px] h-[419px] rounded-[12px] shadow-md">
        <div className="mt-8 mb-16 ml-[206px] text-4xl font-outfit font-bold text-dgreen">Log In</div>
        <div>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={changehandler}
            value={data.email}
            className="mb-2 py-3 px-3 ml-[60px] text-2xl font-outfit font-regular opacity-62 text-dgreen bg-grey rounded-2xl w-391"
          ></input>
          </div>
          <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={changehandler}
            value={data.password}
            className="py-3 px-3 text-2xl ml-[60px] font-outfit font-regular opacity-62 text-dgreen bg-grey rounded-2xl w-391"          
          ></input>
          </div>

          <div>
          <button className="w-150 mt-8 mb-16 ml-[181px] text-2xl bg-bluee hover:bg-dbluee text-white font-outfit font-medium py-3 px-2.5 rounded-full">Log In</button>
          </div>
        </form>
      </div>

      {/* <div className="absolute mt-[318px] ml-[576px] mr-0">
      <img src="/Saly-38.png" alt="bg-image"/>
      </div> */}

    </div>
  );
};

export default Form;
