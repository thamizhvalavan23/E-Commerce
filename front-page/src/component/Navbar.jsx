import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/Context'


const Navbar = () => {
    const {setNavshow,totolCount} =useContext(StoreContext)
  return (
    <div>
        <div className="navbar-list">
            <div className="navbar-head">
                <Link to = "/"><img src={assets.logo} alt='logo' width="150px" /></Link>
            </div>
            <div className="navbar-listmenu">
                <ul>
                    <Link to='/' className='link'><li>Home</li></Link>
                    <Link to='/collection'  className='link'><li>Collection</li></Link>
                    <Link to = '/about'  className='link'><li>About</li></Link>
                    <Link to = "/contact"  className='link' ><li>Contact</li></Link>
                    <span className='admin'>Admin Panel</span>
                </ul>
            </div>
            <div className="navbar-login">
                <Link to="/collection"><img onClick={()=>setNavshow(true)} src={assets.search_icon} alt='logos'  width="25px"/></Link>
                <Link to="/login" className='link' ><img src={assets.profile_icon} alt='search' width="25px" /> </Link>
                <Link to='/cart'><img src={assets.cart_icon} alt='admin' width="25px"/></Link>
                <span className='order-logo'>{totolCount()}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar