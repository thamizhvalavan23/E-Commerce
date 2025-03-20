import React from 'react'
import './Walpaper.css'
import { assets } from '../assets/assets'

const Walpaper = () => {
  return (
    <div>
        <div>
      <div className="home-head">
        <div className="home">
        <div className="home1">
          <hr></hr>
          <span>OurBestSeller</span>
        </div>
        <div className="home2">
          <h1>Latest Arrivals</h1>
        </div>
        <div className="home3">
          <span>Shopnow</span>
          <hr></hr>
        </div>
      </div>
      <div className="home-logo">
        <img src={assets.hero_img} alt='user' width= "550px" height="450px" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Walpaper