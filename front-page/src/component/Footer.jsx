import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="footer-tag">
                <div className="footer-easy">
                    <img src={assets.exchange_icon} alt='logo' />
                    <h2>Easy Exchange Policy</h2>
                    <span>Exchange Policy All So Available!</span>
                </div>
                <div className="footer-easy">
                <img src={assets.quality_icon} alt='logo' />
                    <h2>7 days Return Policy</h2>
                    <span>You Can Return within 7 days !</span>
                </div>
                <div className="footer-easy">
                <img src={assets.support_img} alt='logo' />
                    <h2>Best Customer Support</h2>
                    <span>We giving 24/7 Customer Support!</span>
                </div>
                </div>
                <div className="subscrip">
                    <div className="subscrip-data">
                        <h1>Subscripe now & get 20% off </h1>
                        <div className="subscrip-loerm">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="subscrip-input">
                            <span><input type="text" placeholder='Enter your email' required /><button type='submite'>SUBSCRIBE</button></span>
                        </div>
                    </div>
                </div>
                <div className="footer-details">
                    <div className="footer-data">
                        <img src={assets.logo} alt='logo' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, odit amet iusto possimus eius blanditiis soluta magnam sapiente alias reiciendis quia dicta veritatis magni ratione. Tempore quo aperiam culpa! Consectetur.</p>
                    </div>
                    <div className="footer-company">
                        <h1>Company</h1>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-touch">
                        <h1>GET-IN-TOUCH</h1>
                        <p>+91 9176367651</p>
                        <p>appusingh423@gmail.com</p>
                        <p>instagram</p>
                    </div>
                    </div>
                    <div className="footer-down">
                    <hr></hr>
                    <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
                    </div>
        </div>
    )
}

export default Footer