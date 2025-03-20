import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <hr className='logo'></hr>
        <div className="contact-list">
          <h1>Contact Us <hr className='line'></hr></h1>
          <div className="contact-details">
            <div className="contact-img">
              <img src={assets.contact_img} alt='logo' />
            </div>
            <div className="contact-name">
              <h3>Our Store</h3>
              <div className="name">
              <p>#7 Crose</p>
              <p>Flower Garden </p>
              </div>
               <div className="name">
               <p>Kallakurichi District</p>
              <p>Thozhuvanthangal 605801</p>
              <p>Contact : +91 9176367651</p>
               </div>
              <h1>Thank You !!!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact