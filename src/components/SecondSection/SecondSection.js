import React from 'react';
import about from '../../assets/about.jpg'
import { BsCheckCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
const SecondSection = () => {
    return (
        <div className=' md:px-24 grid md:grid-cols-2 py-[160px] gap-4 text-[#030c4d]  bg-white'>
            <div className=' order-last md:order-first'>
                <div className='ml-10 md:ml-0'>
                    <h2 className='text-3xl font-bold text-[#030C4D] pb-3'>About HUBNEX</h2>
                    <h4 className='text-md'>Hubnex has been serving more than hundreds of clients from different industries in several countries. Being a complete business solutions and digital marketing company, we take pride in creating success stories. Every business is unique so we do not believe in the 'one-size-fits-all' approach. Our list of services are diverse and you will get one stop for all your digital requirements.</h4>
                    <div> <h4 className='text-md pt-6 '>
                        <span className='text-xl font-semibold '><BsCheckCircle className='inline-block' /></span> <span className='text-md font-semibold'>Mission- </span>
                        At Hubnex our Mission is to provide innovative and effective integrated brand marketing and public relations solutions which help our clients grow their businesses and realise their marketing goals.
                    </h4></div>
                    <div> <h4 className='text-md pt-4 '>
                        <span className='text-xl font-semibold '><BsCheckCircle className='inline-block' /></span> <span className='text-md font-semibold'>Vision- </span>
                        At Hubnex our Vision is to Deliver result oriented brand marketing programs and public relations campaigns that enhance our clients awareness, improve their sales and foster their growth.
                    </h4></div>
                    <button href='/#' className='border-2 bg-gradient-to-r from-[#030C4D] to-[#7b27d8] text-white px-6 py-2  font-semibold mt-6 rounded-lg ml-10 md:ml-0 text-lg flex items-center'>Read More <BsFillArrowRightCircleFill className='ml-3 flex items-center' /></button>
                </div>

            </div>
            <div className='flex justify-center items-center order-first md:order-last '>
                <img src={about} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default SecondSection;