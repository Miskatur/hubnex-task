import React from 'react';

const ServiceCart = ({ service }) => {
    const { title, description, icon } = service;
    return (

        <div className="card py-20 bg-base-100 hover:shadow-xl">
            <figure className="px-16 py-6 ">
                <div className='hover:bg-[#f3a01c] rounded-full p-5'>
                    <img src={icon} alt="" className='w-14 ' />
                </div>
            </figure>
            <div className="flex flex-col justify-center items-center px-10 text-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className='text-sm mt-2'>{description}</p>

            </div>
        </div>


    );
};

export default ServiceCart;