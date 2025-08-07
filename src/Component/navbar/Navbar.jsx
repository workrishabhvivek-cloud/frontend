import React, { useEffect, useState } from 'react'
import brandLogo from '../../../public/images/bandLogo.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";

function Navbar() {

    const [cls, setCls] = useState("")
    const [lastScroll, setLastScroll] = useState(0)
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        ()=>{window.removeEventListener(handleScroll)}
    }, [lastScroll])
    
    function handleScroll() {
        if (window.scrollY > 100) {
            if (window.scrollY > lastScroll) {
                setCls("hide");
                setLastScroll(window.scrollY);
            }
            else { setCls("") }
        }
    }

    return (
        <div className={`navbar ${cls}`}>
            <div className="container-first">
                <div className="first-bar">
                    <div className="left">
                        <img src={brandLogo} className='logo' alt="" />
                    </div>
                    <div className="right">
                        <div className="search">
                            <input type="search" placeholder='Search For Product' />
                            <button>Q</button>
                        </div>
                        <div className="visit flex items-center">
                            <span><GrMapLocation size={23}/></span>
                            <span>Visit Us</span>
                        </div>
                        <div className="customer">
                            <span><MdOutlineSupportAgent size={40}/></span>
                            <span>
                                <p>Customer Support</p>
                                <p>+91 8053646079</p>
                            </span>
                        </div>
                        <div className="account">
                            <h1>I</h1>
                            <span>Hello, Sign In</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-second">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Browe product</li>
                        <li>Sitka Gear</li>
                        <li>Current Deal</li>
                        <li>About</li>
                        <li>Return</li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
