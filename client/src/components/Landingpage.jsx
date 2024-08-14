import React from 'react'
import Saly from "../assets/Saly.png";
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div  className='main-container font-outfit overflow-hidden flex flex-col items-center mt-20'>
        <div className='Heading flex flex-col text-center place-content-center'>
            <p className='text-4xl opacity-[61.8%] text-dgreen'>WELCOME TO OUR</p>
            <p className='font-bold text-6xl text-dgreen'>INVENTORY MANAGEMENT SYSTEM</p>
        </div>

          <img src={Saly} alt="mascot" className='w-[315px] h-[315px] mt-6' />

        <Link to = "/Login">
          <button className='w-[168px] h-[56px] text-2xl font-medium text-white bg-bluee rounded-full py-[10px] px-5 mt-6 hover:bg-opacity-50'>
            Get Started
          </button>
        </Link>

        <p className='text-xl opacity-[61.8%] text-dgreen mt-8'>Made by</p>

        <div className='name-container flex gap-[110px] text-center mt-4'>
          <div className='single-name'>
            <p className='text-2xl text-dgreen'>Saksham Goel</p>
            <p className='text-xl text-bluee mt-[-2px]'>102218063</p>
          </div>
          <div className='single-name'>
            <p className='text-2xl text-dgreen'>Aaditya Salaria</p>
            <p className='text-xl text-bluee mt-[-2px]'>102218064</p>
          </div>
          <div className='single-name'>
            <p className='text-2xl text-dgreen'>Devansh Arya</p>
            <p className='text-xl text-bluee mt-[-2px]'>102218067</p>
          </div>
          <div className='single-name'>
            <p className='text-2xl text-dgreen'>Sidharth Dhawan</p>
            <p className='text-xl text-bluee mt-[-2px]'>102218069</p>
          </div>
        </div>

    </div>
  )
}

export default Landingpage