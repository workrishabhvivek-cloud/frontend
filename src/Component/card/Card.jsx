import React, { useState } from 'react'
import Slider from "react-slick";

import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card.css'

export default function Card(product) {

    
    const settings = {
        dots: false,
        infinite: false,
        // slidesToShow: product.color_img.length>3 ? 3 : product.color_img.length,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        prevArrow: <IoIosArrowUp className='hover:color-[#000]' />,
        nextArrow: <IoIosArrowDown />,
        // beforeChange: function(currentSlide, nextSlide) {
        // console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function(currentSlide) {
        // console.log("after change", currentSlide);
        // }
    };

    const [active, setActive] = useState(0)
    const [fill, setFill] = useState(false)
    // card-item-color

    return (
        <div className='card-wrapper bg-white'>
            <div className="img-container relative ">
                {product.offerImage && <img src={product?.offerImage} alt="item" className=' absolute top-0 left-0' />}
                <img src={product?.product_img[active]} alt="item" className='item-img' />
                <div className='color-slider w-8'>
                    <Slider {...settings} >
                        {product.color_img?.map((el, i) => (
                            <div className='py-1 px-0.5  card-color-image-wrapper' key={i}>
                                <img src={el} alt="" onClick={() => i< product.product_img.length && setActive(i)} className={`${active == i && 'card-color-image-active'} cursor-pointer mx-auto  `} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='flex mt-5'>
                <h3 className='card-title ff-pp'>{product?.title}</h3>
                <FaHeart onClick={e=>setFill(!fill)} className={`${ fill?"text-[#f53636]" :"text-[#aaaaaa]"} text-3xl cursor-pointer `} />
            </div>
            <h3 className='card-price ff-pp fw-7'>
                <span className='clr-blu'> {product.actual_price? `$ ${product.actual_price}`:null}</span>
                <span className='clr-84'><strike>{product.strike_price? `$ ${product.strike_price}`:null}</strike></span>
                <span className='clr-org'>{product.discount? `$ ${product.discount}  % off`: null}</span>
            </h3>
            <h3 className='card-size ff-pp'>Available Size :<span className='clr-3c'> {product.sizes}</span></h3>
            <button className='bg-[#072156] text-white text-md px-4 py-2 rounded-md mt-5'>Select Options</button>
        </div>
    )
}
