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
    <div>
      <form onSubmit={sumbithandler}>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={changehandler}
          value={data.email}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={changehandler}
          value={data.password}
        ></input>

        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default Form;
