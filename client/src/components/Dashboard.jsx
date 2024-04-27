import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcategory, categorydata, productdata } from "../services/operation";
import { setcategory } from "../slices/product";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [form, setform] = useState({ search: "", category: "" });
  const [data, setdata] = useState([]);
  const [product, setproduct] = useState([]);
  const [buttonclick, setbuttonclick] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [refresh, setrefresh] = useState(false);

  const navigate = useNavigate();

  async function fetch() {
    const res = await categorydata();
    setdata(res);
    dispatch(setcategory(res));
  }

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (refresh) {
      setrefresh(false);
      fetch();
    }
  }, [refresh]);

  useEffect(() => {
    const fetch = async () => {
      const response = await productdata(form.search, form.category);
      setproduct(response);
    };
    if (buttonclick) {
      setbuttonclick(false);
      fetch();
    }
  }, [buttonclick]);

  const changehandler = (event) => {
    setform((predata) => {
      return {
        ...predata,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmitName = async (event) => {
    event.preventDefault();
    await addcategory(submittedName);
    setrefresh(true);
    setShowNameInput(false);
    setSubmittedName("");
  };

  return (
    <div className="bg-steelwhite">
      Dashboard
      <input
        onChange={changehandler}
        type="text"
        name="search"
        placeholder="search"
      ></input>
      <label htmlFor="category">SELECT CATEGORY</label>
      <select
        name="category"
        value={form.category}
        id="category"
        onChange={changehandler}
      >
        {/* {data.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))} */}
      </select>
      <button
        onClick={() => {
          setbuttonclick(true);
        }}
      >
        SHOW PRODUCT
      </button>
      
      <div>
        <button
          onClick={() => {
            setShowNameInput(true);
          }}
        >
          Add Category
        </button>
        {showNameInput && (
          <div>
            <input
              type="text"
              value={submittedName}
              onChange={(event) => setSubmittedName(event.target.value)}
            />
            <button onClick={handleSubmitName}>Submit</button>
          </div>
        )}
      </div>
      <div>
        <Link to="/dashboard/add">
          <button>ADD PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
