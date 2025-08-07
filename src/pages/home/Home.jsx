import React from 'react'
import Navbar from '../../Component/navbar/Navbar'
import Header from './header/Header'
import HeroBrand from './heroBrand/HeroBrand'
import ProductSlider from '../../Component/ProductSlider/ProductSlider.jsx'
import ImageBanner from '../../Component/imageBanner/ImageBanner.jsx'
import products from '../../Component/Products.js'
import HeroSlider from './heroSlider/HeroSlider.jsx'
import Footer from '../../Component/footer/Footer.jsx'
import Testing from '../../Component/testing/Testing.jsx'





function Home() {
    return (
        <div className='home'>
            <Navbar></Navbar>
            {/* <Header></Header> */}
            <HeroSlider />
            <HeroBrand />
            <section className=' mt-28 py-10'>
                <ProductSlider products={products} />
            </section>
            <ImageBanner />
            <section className=' py-[70px]'>
                <h2 className='text-center font-bold text-[42px] text-[#3c3c3c]'>Best Selling Hunting Packs</h2>
                <ProductSlider products={products} className="mt-10" />
            </section>

            <section className=' py-[70px] bg-[#f5f5f5]'>
                <h2 className='text-center font-bold text-[42px] text-[#3c3c3c]'>Best Selling Hunting Packs</h2>
                <ProductSlider products={products} className="mt-10" />
            </section>

            <ImageBanner />
            <section className=' py-[70px] bg-[#f5f5f5]'>
                <h2 className='text-center font-bold text-[42px] text-[#3c3c3c]'>Best Selling Hunting Packs</h2>
                <ProductSlider products={products} className="mt-10" />
            </section>

            <Testing/>

            <Footer></Footer>

        </div>
    )
}

export default Home
