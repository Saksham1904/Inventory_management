import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Topbar = (props) => {
    const { category }= useSelector((state) => state.product);
    

    const changehandler = (event) => {
        props.setform((predata) => {
          return {
            ...predata,
            [event.target.name]: event.target.value,
          };
        });
      };
        

  return (
    <div className="bg-white h-[76px] w-screen flex">
        <div className='ml-[280px] mt-4'>
            <input
                onChange={changehandler}
                type="text"
                name="search"
                placeholder="Search product"
                value={props.form.search}
                className='font-outfit text-base text-dgreen opacity-[61.8%]'
            ></input>

            <label htmlFor="category" className='font-outfit text-base text-dgreen opacity-[61.8%]'>Choose Category</label>

            <select
                name="category"
                value={props.form.category}
                id="category"
                onChange={changehandler}
            >
                {(category==null)?null:category.map((item, index) => (
                <option key={index} value={item.name}>
                    {item.name}
                </option>
                ))}
            </select>
            <button
                onClick={() => {
                  props.setbuttonclick(true);
                }}
                className='font-outfit text-base font-medium text-white bg-bluee rounded-full py-[10px] px-4'
            >
                Show
            </button>
        </div>
      </div>
  )
}

export default Topbar