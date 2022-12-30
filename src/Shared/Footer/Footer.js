import React from 'react';
const Footer = () => {
    return (
        <div className=' bg-[#030C4D] py-7' >

            <footer className="footer grid md:grid-cols-4 p-5  md:p-10  md:w-10/12 mx-auto pb-20 text-white" >

                <div className=" footer-contact">

                    <div className='flex flex-col justify-start items-center'>
                        <p className='font-semibold text-md'>
                            Hubnex Media INC. <br />
                            #05, Huddle, Ground Floor,<br />
                            Tower-B, DLF Cyber City, <br />Gurugram, Haryana-122002 <br />
                            <strong>Phone:</strong> +91 6392-750561<br />
                            <strong>Email:</strong> hello@hubnex.in<br />
                        </p>
                    </div>
                </div>
                <div >
                    <h4 className='text-xl font-bold'>Useful Links</h4>
                    <ul>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="/#">Home</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="/#">About us</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="/#">Refund Policy</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="/#">Terms of service</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="/#">Privacy policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Our Services</h4>
                    <ul>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="website.html">Website &amp; App Development</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="search.html">Search Engine Optimization</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="social.html">Social Media Optimisation</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="pr.html">PR &amp; Brand Management</a></li>
                        <li className="
                    mb-2"><i className="fa-solid fa-chevron-right mr-1"></i> <a href="content.html">Content Management</a></li>
                    </ul>
                </div>
                <div className=''>
                    <span className=" text-white text-xl font-bold">Join Our Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Subscribe For More</span>
                        </label>
                        <div className="relative">
                            <input type="text" className="input input-bordered w-full " />
                            <button className="btn absolute top-0 right-0 rounded-l-none bg-[#7b27d8cc] hover:bg-[#030C4D] text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="w-10/12 mx-auto grid md:grid-cols-2 border-t-2 ">
                <div className="md:me-auto text-center md:text-start text-white pt-5">

                    Hubnex is a leading Digital Marketing Agency with expertise in Lead Generation,<br /> Digital Marketing, Website &amp; Mobile Application Designing &amp; Development.&amp; Election Management Campaigns<br />
                    Hubnex - is rated 4.5 stars by https://www.facebook.com/hubnex/<br />
                    <span><strong>Copyright © 2021 Hubnex</strong></span>. All Rights Reserved
                </div>
                <div className=" text-center md:text-right pt-3 pt-md-0  text-white">
                    <a href="https://twitter.com/hubnex" target="_blank" rel='noreferrer' ><i className="fa-brands fa-twitter mr-3 text-2xl"></i></a>
                    <a href="https://www.facebook.com/hubnex" target="_blank" rel='noreferrer' ><i className="fa-brands fa-facebook mr-3 text-2xl"></i></a>
                    <a href="https://www.instagram.com/hubnex/" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-instagram mr-3 text-2xl"></i></a>

                    <a href="/#" ><i class="fa-brands fa-linkedin mr-3 text-2xl"></i></a>
                </div>
            </div>

        </div >
    );
};

export default Footer;