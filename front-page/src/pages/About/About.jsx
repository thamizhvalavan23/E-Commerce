import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'


const About = () => {
  return (
    <div>
      <div className="about">
        <hr className='logo'></hr>
        <h1>About us<hr className='line-of'></hr></h1>
        <div className="about-tags">
        <div className="about-img">
          <img src={assets.about_img} alt='logo' />
        </div>
        <div className="about-tag">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi voluptas eius maxime obcaecati earum rerum voluptatibus hic ipsum asperiores libero voluptatem consequuntur, cumque officiis nesciunt, id odio nobis aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi voluptas eius maxime obcaecati earum rerum voluptatibus hic ipsum asperiores libero voluptatem consequuntur.</p>
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi voluptas eius maxime obcaecati earum rerum voluptatibus hic ipsum asperiores libero voluptatem consequuntur sit amet consectetur adipisicing elit. Amet eligendi voluptas eius maxime obcaecati earum rerum voluptatibus</p>
        </div>
        </div>
        </div>
        <div className="about-choose">
          <h1>Why Choose Us <hr></hr></h1>
          <div className="about-list">
            <div className="about-list-tag">
              <h3>Quality Assurance:</h3>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div className="about-list-tag">
              <h3>Convenience:</h3>
              <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier</p>
            </div>
            <div className="about-list-tag">
              <h3>Exceptional Customer Service:</h3>
              <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About