import React from 'react'
import { Link } from 'react-router-dom'
import categoriesIcon from '../assets/Categories.png';
import productsIcon from '../assets/Products.png';
import salesIcon from '../assets/Sales.png';
import dashboardIcon from '../assets/Home.png';
import logoutIcon from '../assets/Logout.png';



function Sidescroll() {
  return (
    <div className="sidebar h-screen w-[280px] bg-dgreen rounded-r-[10px]">
      <div className="sidebar-header text-white py-6 pl-9 font-outfit font-bold text-2xl bg-lgreen w-[280px]">
        <h1>Inventory System</h1>
      </div>

      <div className="sidebar-menu text-white font-outfit font-medium text-base">
        <ul className='flex flex-col'>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/Dashboard" className='ml-10 flex flex-row gap-4'>
              <img src={dashboardIcon} alt="Dashboard" />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/Products" className='ml-10 flex flex-row gap-4'>
              <img src={productsIcon} alt="Products" /> 
              <p>Products</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/categories" className='ml-10 flex flex-row gap-4'>
              <img src={categoriesIcon} alt="Categories" />
              <p>Categories</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4'>
            <Link to="/Sales" className='ml-10 flex flex-row gap-4'>
              <img src={salesIcon} alt="Sales" /> 
              <p>Sales</p>
            </Link>
          </li>
          <li className='rounded-lg hover:bg-lgreen active:bg-bluee h-14 w-[280px] py-4 mt-[374px]'>
            <Link to="/Logout" className='ml-10 flex flex-row gap-4'>
              <img src={logoutIcon} alt="Logout" /> 
              <p>Log Out</p>
            </Link>
          </li>
        </ul>
      </div>

      
    </div>
  );
}

export default Sidescroll;
