import React from 'react';
import { FaStar } from "react-icons/fa";

import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.5,
        color: "Red",
        aosDelay: "0"
    },
    {
        id: 3,
        img: Img3,
        title: "Women Northen",
        rating: 3.0,
        color: "Blue",
        aosDelay: "0"
    },
    {
        id: 4,
        img: Img4,
        title: "Women Southern",
        rating: 5.0,
        color: "Pink",
        aosDelay: "0"
    },
    {
        id: 5,
        img: Img3,
        title: "Women Northen",
        rating: 3.0,
        color: "Blue",
        aosDelay: "0"
    },

]

const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae.</p>
                </div>
                {/* Body Section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* card section */}
                        {ProductsData.map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='space-y-1'>
                                <img src={data.img} alt="" className='w-[150px] h-[220px] object-cover rounded-md' />
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all button */}
                    <div data-aos="fade-up" className='flex justify-center '>
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-3 rounded-md'>
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
