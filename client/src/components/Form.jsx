import React from "react";
import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

const Form = () => {
  const [field, setField] = useState("Log In");

  const tabData = [
    {
      id: 1,
      tabName: "Log In",
    },
    {
      id: 2,
      tabName: "Sign Up",
    },
  ];

  return (
    
    <div className="bg-salylite">
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="bg-white w-[511px] h-[419px] rounded-[12px] shadow-md">
          <div className="flex justify-center mt-8 mb-16 text-3xl font-outfit font-semibold text-dgreen">
            <div
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="flex bg-grey p-1 gap-x-1 my-6 rounded-full max-w-max"
            >
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setField(tab.tabName)}
                  className={`${
                    field === tab.tabName
                      ? "bg-dgreen text-white"
                      : "bg-transparent text-dgreen"
                  } py-2 px-5 rounded-full transition-all duration-200`}
                >
                  {tab?.tabName}
                </button>
              ))}
            </div>
          </div>
          {field == "Log In" ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Form;
