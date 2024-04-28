import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import avatarIcon from '../assets/Avatar.png';

const Topbar = (props) => {
    
   
   
   const  { category }= useSelector((state) => state.product);
   
  
   
    const changehandler = (event) => {
        props.setform((predata) => {
          return {
            ...predata,
            [event.target.name]: event.target.value,
          };
        });
      };
        

  return (
    <div className="bg-white h-[80px] flex gap-4 px-8 py-4">
            <div className='w-[410px] h-[45px] flex gap-2 px-4 py-[10px] rounded-full border-solid border-2 border-dgreen border-opacity-[38.2%]'>
                <FontAwesomeIcon icon={faSearch} className='text-dgreen opacity-[61.8%] text-sm pt-[4px]'/>
                <input
                    onChange={changehandler}
                    type="text"
                    name="search"
                    placeholder="Search product, category, sale"
                    value={props.form.search}
                    className='w-[410px] font-outfit text-base placeholder-dgreen opacity-[61.8%] outline-none border-none focus:border-transparent focus:bg-transparent'
                ></input>
            </div>

                {/* <label htmlFor="category" className='font-outfit text-base text-dgreen opacity-[61.8%]'>Choose Category</label> */}
            <div className='w-[204px] h-[45px] flex px-4 py-[10px] rounded-full border-solid border-2 border-dgreen border-opacity-[38.2%]'>
                <select
                    name="category"
                    value={props.form.category}
                    id="category"
                    onChange={changehandler}
                    className='text-dgreen text-opacity-[61.8%] bg-transparent border-none outline-none rounded-full font-outfit text-base px-2'
                >
                    <option value="" disabled selected>Select Category</option>
                    {(category==null)?null:category.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                    
                    ))}
                </select>
            </div>

                <button
                    onClick={() => {
                    props.setbuttonclick(true);
                    }}
                    className='w-[110px] h-[45px] font-outfit text-base font-medium text-white bg-bluee rounded-full py-[10px] px-4 hover:bg-opacity-50'
                >
                    Show
                </button>

                <Link to="/Profile" className='ml-[375px]'>
                <img src={avatarIcon} alt="profile icon" />
                </Link>

        
    </div>
  )
}

export default Topbar