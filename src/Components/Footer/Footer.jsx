import React from 'react'
import './footer.css';
import tv from '../../images/tv.png';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
    return (
        <>
            <div className='foot'>
                <div className='details'>
                    <div className='first'>
                        <h2>Address</h2>
                        <p>34, Naachiyappa 2nd Streert, Erode Ho, Erode - 638001 (Thinathanthi Offic)</p>
                    </div>
                    <div className='second'>
                            <Link className="ww" to="/">Home</Link>
                            <Link className="ww" to="/gallery">Gallery</Link>
                            <Link className="ww" to="/">Services</Link>
                            <Link className="ww" to="/">About us</Link>
                    </div>
                </div>
                <div className='end'>
                    
                    <div className='tttt'>
                        <div className='ttt-c'>
                            <div className='ww1'>
                                <div>
                                    <AiOutlineMail/>
                                </div>
                                <p className='ttxxt'>shanmugaelectronics@gmail.com</p>
                            </div>
                            <div className='ww1'>
                                <div>
                                    <FaPhoneAlt/>
                                </div>
                                <a href='tel:+91 9842776615'className='ttxxt'>+91-9842776615</a>
                            </div>
                        </div>
                        <div>
                            <img src={logo} style={{width:'3rem'}}/>
                        </div>

                    </div>
                </div>

                <div className='develop'>
                    <p className='ttxxt1'>(©)shanmuga Electronics All Rights Reserved</p>
                    <p>Design & Developed by Vennila Deventhiran Development Team</p>
                </div>
            </div>
        </>
    )
}

export default Footer