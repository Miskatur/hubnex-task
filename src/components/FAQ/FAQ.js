import React, { useEffect, useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";

const FAQ = () => {
    const [datas, setdatas] = useState([]);
    useEffect(() => {
        fetch(`faqdata.json`)
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])


    return (
        <div className='bg-gradient-to-r from-[#5846f9] to-[#7b27d8] py-16'>
            <div className='flex justify-center items-center py-16'>
                <h1 className='text-4xl font-bold border-b-4 text-white border-[#f3a01c] pb-3 mb-3 mx-5'>FREQUENTLY ASKED QUESTION</h1>
            </div>
            <div className='w-3/4 mx-auto'>
                {
                    datas.map(data => <div key={data.id} tabIndex={0} className="collapse collapse-arrow border border-base-100 bg-base-100 rounded-md mb-3 p-2">
                        <div className="collapse-title text-md font-medium text-[#030C4D] flex justify-start items-center">
                            <FaRegQuestionCircle className='mr-3 text-xl' />  {data.title}
                        </div>
                        <div className="collapse-content ">
                            <p className='text-[#030C4D]'>{data.answer}</p>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default FAQ;