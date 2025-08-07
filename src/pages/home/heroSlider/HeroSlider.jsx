
import React from "react";
import Slider from "react-slick";

import "../heroSlider/heroSlider.css";

import Img0 from '../../../../public/images/header1.jpg';
import Img1 from '../../../../public/images/header2.jpg';
import Img2 from '../../../../public/images/header3.jpg';
import Img3 from '../../../../public/images/header4.jpg';
import dummy from '../../../../public/images/dummyLogo.png';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



let data =[
  {
    backgroungImage: Img0,
    title: 'title1',
    image: dummy,
  },
  {
    backgroungImage: Img1,
    title: 'title1',
    image: dummy,
  },
  {
    backgroungImage: Img2,
    title: 'title1',
    image: dummy,
  },
  {
    backgroungImage: Img3,
    title: 'title1',
    image: dummy,
  },

]


function HeroSlider() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack  />,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,

  };

  return (
    <div className="slider-container hero-slider ">
      <Slider {...settings}>
        {data.map((item, index) => (
            <div key={index}>
              <div className="hero-slide min-h-[520px]" style={{backgroundImage: `url(${item.backgroungImage})`}}>
                <div className="container">
                  <h2>{item.title}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <img src={item.image} alt="Hero Slide" />
                </div>
              </div>
            </div>
          ))}

      </Slider>
    </div>
  );
}




export default HeroSlider