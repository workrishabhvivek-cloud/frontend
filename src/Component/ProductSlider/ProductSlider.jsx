import React from 'react'
import Slider from 'react-slick'
import  '../ProductSlider/productslider.css'



import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import Card from '../card/Card.jsx';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function ProductSlider({products , className}) {
    console.log(className)

    const setting1 = {
        dots: false,
        infinite: false,
        infinite:true,
        slidesToShow:innerWidth > 1600? 5:innerWidth>1240?4:innerWidth>768?3:2,
        slidesToScroll: 2 ,
        prevArrow: <IoIosArrowBack className='producter-slider-arrow shadow-lg' />,
        nextArrow: <IoIosArrowForward className='producter-slider-arrow shadow-lg' />
    }

    return (
        <div className={`product-slider ${className}`}>
            <div className='product-slider-wrapper max-w-[1800px] mx-auto px-14'>
                <Slider {...setting1}>
                    {products.map(product=><Card {...product} key={product.id}></Card>)}
                </Slider>
            </div>
        </div>
    )
}

export default ProductSlider
