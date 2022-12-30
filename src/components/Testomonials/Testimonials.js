import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination } from "swiper";
import pic from "../../assets/testimonials-1.jpg"

const Testimonials = () => {

    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        fetch(`fakeQuotes.json`)
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])

    return (
        <div className='bg-white p-5 md:px-24 md:mb-20'>
            <div>
                <div className='flex flex-col justify-center items-center pt-10 pb-16'>
                    <h1 className='text-4xl font-bold border-b-4 border-[#f3a01c] pb-3 mb-3'>TESTIMONIALS</h1>
                    <p>What's Our Clients Says About Us
                    </p>

                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"

            >
                {
                    quotes.map(quote =>
                        <SwiperSlide>
                            <div className='mb-20 text-[#030C4D]'>
                                <div className='relative border-2 shadow-lg px-5 py-10 my-16 rounded-lg'>
                                    <p>
                                        <i className="fa-solid fa-quote-left text-4xl mr-3"></i>
                                        <span>{quote.description}</span>

                                        <i className="fa-solid fa-quote-right text-4xl ml-3"></i></p>
                                </div>
                                <div className='absolute left-0 bottom-12'>
                                    <div className='avatar w-20 shadow-lg rounded-full'>
                                        <img src={pic} className="rounded-full" alt="" />
                                    </div>
                                    <div className='ml-5'>
                                        <h3 className='text-lg font-semibold'>{quote.name}
                                        </h3>
                                        <h4 className='text-sm '>{quote.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }



            </Swiper>
        </div>
    );
};

export default Testimonials;