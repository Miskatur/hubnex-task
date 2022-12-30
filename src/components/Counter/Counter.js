import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='bg-gradient-to-r from-[#030c4d] to-[#7b27d8] text-white mb-10 md:mb-20'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:w-3/4 gap-5 mx-auto py-20'>

                {/* counter using NPM Package  */}
                {/* first  */}
                <div className='flex flex-col justify-center items-center mt-10 md:mt-0'>
                    <CountUp start={0} end={200} duration={2} className='text-6xl font-bold' />
                    <h4 className='text-sm mt-3'>Buisness Digitalized</h4>
                </div>
                {/* second  */}
                <div className='flex flex-col justify-center items-center mt-10 md:mt-0'>
                    <CountUp start={0} end={50} duration={2} className='text-6xl font-bold' />
                    <h4 className='text-sm mt-3'>Selling Products</h4>
                </div>

                {/* third */}
                <div className='flex flex-col justify-center items-center mt-10 md:mt-0'>
                    <CountUp start={0} end={130} duration={2} className='text-6xl font-bold' />
                    <h4 className='text-sm mt-3'>Buisness Making Profits</h4>
                </div>

                {/* fourth  */}
                <div className='flex flex-col justify-center items-center mt-10 md:mt-0'>
                    <CountUp start={0} end={1000} duration={2} className='text-6xl font-bold' />
                    <h4 className='text-sm mt-3'>Buisness Conversion</h4>
                </div>

            </div>
        </div>
    );
};

export default Counter;