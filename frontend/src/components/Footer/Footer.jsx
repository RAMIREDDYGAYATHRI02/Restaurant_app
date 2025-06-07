import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='' />
                <p>Craving something delicious? We've got you covered! Order from your favorite restaurants and have fresh meals delivered to your doorstep in minutes. From mouth-watering pizzas to healthy salads, explore a wide variety of cuisines. Fast, reliable, and always fresh.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Ploicy</li>

                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9848265782</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>© 2024 Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
