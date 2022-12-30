import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`fakedata.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className='pb-10 md:pb-16 text-[#030C4D]'>
            <div className='flex flex-col justify-center items-center pt-10 pb-16'>
                <h1 className='text-4xl font-bold border-b-4 border-[#f3a01c] pb-3 mb-3'>SERVICES</h1>
                <p>Our Wide Range Of Services</p>

            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto'>
                {/* Service Cart */}
                {
                    services.map(service => <ServiceCart
                        key={service.id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>

        </div>
    );
};

export default Services;