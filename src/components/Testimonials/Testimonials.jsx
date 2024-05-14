import React from 'react';
import Slider from 'react-slick';

const TestimonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem totam aspernatur harum nostrum. Aliquid voluptatem suscipit cum maiores illum?",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem totam aspernatur harum nostrum. Aliquid voluptatem suscipit cum maiores illum?",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 3,
        name: "Virat Kholi",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem totam aspernatur harum nostrum. Aliquid voluptatem suscipit cum maiores illum?",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 4,
        name: "Vinod",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem totam aspernatur harum nostrum. Aliquid voluptatem suscipit cum maiores illum?",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 5,
        name: "Hero",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem totam aspernatur harum nostrum. Aliquid voluptatem suscipit cum maiores illum?",
        img: "https://picsum.photos/101/101"
    },
]

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae.</p>
                </div>
                {/* Testimonials Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialsData.map((data) => (
                                <div className='my-6 relative '>
                                    <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gary-800 bg-primary/10  border'>
                                        <div className='mb-4'>
                                            <img src={data.img} alt=""
                                                className='rounded-full w-20 h-20' />
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className='space-y-2'>

                                                <p className='text-xs text-gray-500'>{data.text}</p>
                                                <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='absolute text-black/20 text-9xl font-serif top-0 right-5 '>
                                        ,,
                                    </p>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
