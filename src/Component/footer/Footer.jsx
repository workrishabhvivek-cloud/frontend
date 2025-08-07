import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";



import img from '/images/dummyLogo.png'


function Footer() {
  return (
    <footer className='bg-[#000c25] text-white'>
        <div className=' bg-[#000c25] text-white max-w-[1270px] px-1 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-10'>

            <div className='lg:col-span-2'> 
                <img src={img} alt="" />
                <ul className=' ff-pp text-base opacity-70 mt-6 flex flex-col gap-2.5 mt-5'>
                    <li><FaMapLocationDot className='inline text-xl me-4' /> 2630 S 2000 W Rexburg, ID 83440</li>
                    <li> <FaMapLocationDot className='inline text-xl me-4' /> sales.mountainarchery@gmail.com</li>
                    <li> <BiPhoneCall className='inline text-xl me-4'/>+91 8053646079</li>
                </ul>
            </div>
            
            <div>
                <h4 className='text-lg ff-pp capitalize tracking-wide'>Account</h4>
                <ul className=' ff-pp text-base opacity-70 flex flex-col gap-2.5 mt-5'> 
                    <li>My Account</li>
                    <li>My Order</li>
                    <li>My Wishlist</li>
                    <li>Shopping Cart</li>
                </ul>
            </div>

            <div>
                <h4 className='text-lg ff-pp capitalize tracking-wide'>Need to know</h4>
                <ul className=' ff-pp text-base opacity-70 flex flex-col gap-2.5 mt-5'> 
                    <li>About Us</li>
                    <li>Current Deals</li>
                    <li>Sitka Gear</li>
                    <li>Sitka Closeouts</li>
                </ul>
            </div>

            <div>
                <h4 className='text-lg ff-pp capitalize tracking-wide'>Support</h4>
                <ul className=' ff-pp text-base opacity-70 flex flex-col gap-2.5 mt-5'> 
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Return Policy</li>
                    <li>Sitemap</li>
                </ul>
            </div>
           
        </div>
        <div className='flex justify-between px-2  border-t-[1px] border-[#4d4d4d] py-5'>
            <div className='min-w-[1270px] mx-auto flex justify-between px-2'>
                <p className='text-base ff-pp opacity-70'>{new Date().getFullYear()} ClimbCraft Corportaion</p>   
                <div className='flex gap-2'> 
                    <p>Follow us On :</p>
                    <FaFacebookF className='text-xl opacity-75'/>
                    <FaXTwitter className='text-xl opacity-75'/>
                    <FaInstagram className='text-xl opacity-75'/>
                    <FiYoutube className='text-xl opacity-75'/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer