import React, { useContext, useEffect, useState } from 'react'
import './Search.css';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/Context';
import { useLocation } from 'react-router-dom';


const Search = () => {

    const { search , setSearch ,navshow ,setNavshow} = useContext(StoreContext)
    const display = useLocation()
    const [visible, setVisible] = useState(true)

    useEffect((e)=>{
       
    {
        if(display.pathname.includes('collection') && navshow){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    },[display])
  return navshow && visible ? (<div>
            <hr className='tap'></hr>
            <div className='full'>
            <div className="search-data">
                <div className="search-list">
                    <span><input type='text' placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} /><img src={assets.search_icon} alt='logo' /></span>
                </div>
                <div className="cancel">
                    <img src={assets.cross_icon} alt='cross' onClick={()=>setNavshow(false)}/>
                </div>
            </div>
            </div>
            </div>
            ) : ''
}

export default Search