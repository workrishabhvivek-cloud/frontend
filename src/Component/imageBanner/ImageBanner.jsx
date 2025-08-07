import React from 'react'
import bg from '/images/imageBanner1.jpg'

function ImageBanner() {



    return (
        <section className=''>
            <div className={`w-[min(1720px,95%)] mx-auto  h-[490px] flex flex-col justify-between`} style={{ backgroundImage: `url(${bg})` }}>
                <div className='2xl:px-18  px-[5%] grow flex items-center '>
                    <div className=''>
                        <h4 className='capitalize ff-bn font-light leading-none text-3xl text-white'>gear up</h4>
                        <h2 className='capitalize mt-2 ff-bn leading-none text-[113px]  text-white'>rifle season</h2>
                        <h3 className='capitalize mt-1 ff-bn leading-none text-3xl tracking-[18px] text-[#f6ec47]'>solid collection</h3>
                        <button className='capitalize text-xl rounded-md mt-8 ff-pp bg-org px-6 text-white font-medium  py-4'> shop now</button>
                    </div>
                </div>

                <ul className='flex justify-center uppercase bg-[#00000070] py-3 ff-pp'>
                    <li className='text-white text-md px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-md px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-md px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-md px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-md px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-md px-5 border-r-2'>Lorem, ipsum dolor.</li>
                </ul>

            </div>
        </section>
    )
}

export default ImageBanner
