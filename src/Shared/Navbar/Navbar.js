import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo.png'


const Navbar = () => {

    //Navbar Items
    const menuItems = <>
        <li><Link className='md:text-white text-[#030C4D] font-semibold'>Home</Link></li>
        <li><Link className='md:text-white text-[#030C4D] font-semibold'>About</Link></li>

        {/* Services list for medium device */}
        <li tabIndex={0} className="hidden md:flex">
            <Link className='md:text-white text-[#030C4D] font-semibold'>
                Services
                <svg className="fill-current ml-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="pl-2 pr-5 bg-white shadow-lg menu dropdown-left">
                <li><Link className=' text-[#030C4D]'>Website & App Development</Link></li>
                <li><Link className='text-[#030C4D]'>Search Engine Optimization</Link></li>
                <li><Link className=' text-[#030C4D]'>Social Media Optimisation</Link></li>
                <li><Link className='text-[#030C4D]'>PR & Brand Management</Link></li>
                <li><Link className=' text-[#030C4D]'>Content Management</Link></li>
                <li><Link className='text-[#030C4D]'>Business Consulting</Link></li>
                <li><Link className=' text-[#030C4D]'>Political Campaign Management</Link></li>
                <li><Link className='text-[#030C4D]'>Emerging Technology Services</Link></li>
                <li><Link className=' text-[#030C4D]'>Outdoor Media Marketing</Link></li>
                <li><Link className='text-[#030C4D]'>Print Media</Link></li>
                <li><Link className=' text-[#030C4D]'>Video Production</Link></li>

            </ul>
        </li>

        {/* Services Items for Small Devices  */}
        <li tabIndex={0} className="flex md:hidden ">
            <Link className='md:text-white text-[#030C4D] font-semibold' to={'/services'}>
                Services
            </Link>

        </li>
        <li><Link className='md:text-white text-[#030C4D] font-semibold'>Plans</Link></li>
        <li><Link className='md:text-white text-[#030C4D] font-semibold'>Our Values</Link></li>
        <li><Link className='md:text-white text-[#030C4D] font-semibold'>Contact</Link></li>
        <li><Link className='border-[3px] hidden lg:flex border-gray-200 hover:bg-[#030C4D] hover:border-white font-semibold px-[25px] py-[8px] lg:ml-6 rounded-xl md:text-white text-[#030C4D]'>Get Started</Link></li>
    </>


    return (
        <div className="w-full navbar lg:px-[100px] lg:py-4 bg-[#030C4D] text-white sticky top-0 z-50">
            {/* Navbar logo  */}
            <div className="flex-1">
                <Link to={'/'}>
                    <img src={logo} alt="" className='w-32 h-10' />
                </Link>
            </div>

            {/* For md device nav Items */}
            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            {/* for Mobile device Nav Items  */}
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle flex justify-center items-center lg:hidden">
                    <div className="w-10 rounded-full flex justify-center items-center">
                        <FaBars />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 w-96 bg-white mr-auto">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;