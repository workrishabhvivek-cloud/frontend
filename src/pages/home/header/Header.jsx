import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img0 from '../../../../public/images/header1.jpg';
import Img1 from '../../../../public/images/header2.jpg';
import Img2 from '../../../../public/images/header3.jpg';
import Img3 from '../../../../public/images/header4.jpg';


import brand0 from '../../../../public/images/home-brand1.png';
import brand1 from '../../../../public/images/home-brand2.png';
import brand2 from '../../../../public/images/home-brand3.png';
import brand3 from '../../../../public/images/home-brand4.png';




import './header.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Header() {


    // console.log(images)
  return (
      <>
        <div className='header-container'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide> <img src={Img0} alt="" /> </SwiperSlide>
            <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        </Swiper>
        
        

        {/* <div className="header-brand-wrapper">
          <div className="header-brand">
            <div className="brand-item">
              <img src={brand0} alt="" />
              <p>zamberlan boots</p>
            </div>

            <div className="brand-item">
              <img src={brand1} alt="" />
              <p>black gold sights</p>
            </div>

            <div className="brand-item">
              <img src={brand2} alt="" />
              <p>spot hogg sights</p>
            </div>

            <div className="brand-item">
              <img src={brand3} alt="" />
              <p>diamond bows</p>
            </div>
          </div>
        </div> */}

        {/* <PauseOnHover/> */}

      </div>
    </>
  );
}


import  { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        
      </Slider>
    </div>
  );
}

export  {PauseOnHover};

