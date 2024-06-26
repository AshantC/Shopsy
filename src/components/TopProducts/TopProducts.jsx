import React from 'react';
import Image1 from "../../assets/shirt/shirt.png";
import Image2 from "../../assets/shirt/shirt2.png"
import Image3 from "../../assets/shirt/shirt3.png"
import { FaStar } from "react-icons/fa";
const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Shirt 1",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.",
    },
    {
        id: 2,
        img: Image2,
        title: "Shirt 2",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.",
    },
    {
        id: 3,
        img: Image3,
        title: "Shirt 3",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.",
    },
    {
        id: 4,
        img: Image3,
        title: "Shirt 3",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.",
    },
    {
        id: 5,
        img: Image3,
        title: "Shirt 3",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea.",
    },
]

const TopProducts = ({handleOrderPopup}) => {
    return (
        <div>
            <div className="container">
                {/* Header Section */}
                <div className='text-left mb-24 '>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae.</p>

                </div>
                {/* Body Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {
                        ProductsData.map((data) => (
                            <div key={data.id} data-aos="zoom-in"
                                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mb-20'>
                                {/* image section */}
                                <div className='h-[100px]'>
                                    <img
                                    className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-125 duration-300 drop-shadow-md' 
                                    src={data.img} alt="" />
                                </div>
                                {/* details section */}
                                <div className='p-4 text-center'>
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <button 
                                    className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                    onClick={()=>handleOrderPopup()}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts
