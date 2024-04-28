import React from 'react'
import { Link } from 'react-router-dom'
import categoriesIcon from '../assets/Categories.png';
import productsIcon from '../assets/Products.png';
import salesIcon from '../assets/Sales.png';
import dashboardIcon from '../assets/Home.png';
import logoutIcon from '../assets/Logout.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { settoken } from '../slices/product';
import { useState } from 'react'




function Sidescroll() {
  const dispatch=useDispatch()
const handleclick=()=>{
  
  localStorage.clear()
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  dispatch(settoken(null))
}


  return (
    <div className="sidebar h-screen w-[280px] bg-dgreen rounded-r-[10px]">
      <div className="sidebar-header text-white py-6 pl-9 font-outfit font-bold text-2xl bg-lgreen w-[280px]">
        <h1>Inventory System</h1>
      </div>

      <div className="sidebar-menu text-white font-outfit text-base">
        <ul className='flex flex-col'>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/dashboard" className='ml-10 flex flex-row gap-4 items-center'>
              <FontAwesomeIcon icon={faHouse} className='text-white h-5 w-5'/>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/dashboard/add" className='ml-10 flex flex-row gap-4 items-center'>
              <FontAwesomeIcon icon={faBox} className='text-white w-5 h-5' />
              <p>Products</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/dashboard/category" className='ml-10 flex flex-row gap-4 items-center'>
              <FontAwesomeIcon icon={faLayerGroup} className='text-white h-5 w-5'/>
              <p>Categories</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/dashboard/sale" className='ml-10 flex flex-row gap-4 items-center'>
              <FontAwesomeIcon icon={faPiggyBank} className='text-white h-5 w-5'/>
              <p>Sales</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4 mt-[374px]'>
            <Link to="/login" className='ml-10 flex flex-row gap-4 items-center'>
             
              <FontAwesomeIcon icon={faRightFromBracket} className='text-white h-5 w-5'/>
              <button onClick={handleclick}>LOGOUT</button>
            </Link>
          </li>
        </ul>
      </div>

      
    </div>
  );
}

export default Sidescroll;
