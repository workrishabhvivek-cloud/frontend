import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './heroBrand.css'
import brand0 from '../../../../public/images/home-brand1.png';
import brand1 from '../../../../public/images/home-brand2.png';
import brand2 from '../../../../public/images/home-brand3.png';
import brand3 from '../../../../public/images/home-brand4.png';


function    HeroBrand() {

    let brand = [
        { brandImg: brand0, brandName: 'zamberlan boots'  , id:1  },
        { brandImg: brand1, brandName: 'black gold sights' , id:2   },
        { brandImg: brand2, brandName: 'spot hogg sights' , id:3   },
        { brandImg: brand3, brandName: 'diamond bows', id:4   }
    ]

    var setting = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow:  4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };

    return (
        <section className="relative" >
            <div className="hero-brand-container">
            <div className="hero-brand-wrapper">
                <Slider {...setting}>
                    {brand.map((item) => <div className="brand-item" key={item.id}>
                        <img src={item.brandImg} alt="" />
                        <p className="ff-pp text-[#062156] mt-[8px] text-center text-sm uppercase font-semibold">{item.brandName}</p>
                    </div>)}
                </Slider>
            </div>

            </div>
        
        </section>
    );
}

export default HeroBrand;
