import React from 'react';
import { Link } from 'react-router-dom';

const ServicesNavbar = () => {
    return (
        <div className='my-20 flex justify-center items-center'>
            <ul className="pl-2 pr-5 bg-white shadow-lg dropdown-content list-disc">
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
        </div>
    );
};

export default ServicesNavbar;