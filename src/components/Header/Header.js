import React from 'react';
import hero from '../../assets/hero-img.png'

const Header = () => {
    return (
        <div className='bg-[#030C4D] md:px-40 grid md:grid-cols-2 py-[80px] gap-4'>
            <div className='pt-10 md:pt-16 order-last md:order-first'>
                <div className='flex flex-col justify-center items-center px-10 lg:px-0'>
                    <h1 className='text-2xl lg:text-[52px] text-white font-black lg:leading-[64px]'>We have innovative team to take care of your preferences</h1>
                    <h2 className='text-[#B4B7CA] text-xl mt-4'>
                        Hubnex is a Gurgaon headquartered global venture which specialises in scaling up established
                        MSMEs and start up businesses across various
                        industries such as hospitality, FMCG, technology,
                        services and so on.
                    </h2>
                </div>
                <button href='/#' className='border-2 text-white px-4 py-2 hover:bg-white hover:text-[#030C4D] font-semibold mt-6 rounded-lg ml-10 md:ml-0'>Get Started</button>
            </div>
            <div className='flex justify-center items-center order-first md:order-last '>
                <img src={hero} alt="" className='w-10/12' />
            </div>
        </div>
    );
};

export default Header;