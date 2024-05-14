import React from 'react';
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
  return (
    <div data-aos="zoom-in"
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-black' 
    style={BannerImg}>
      <div  className="container backdrop-blur-sm py-10"
      style={BannerImg}>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 
            className='text-2xl !text-center sm:text-4xl sm:text-left font-semibold'>
                Get Notified About New Products
            </h1>
            <input type="text" placeholder='Enter your email' data-aos="fade-up"
            className='w-full p-3' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
