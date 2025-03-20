import React, { useContext, useEffect, useState } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/Context'
import { assets } from '../../assets/assets'
import Realated from '../../component/Realated'

const Details = () => {
    const {productId} = useParams()
    const {products,addTocart} = useContext(StoreContext)
    const [main , setMain] = useState(false)
    const [logo , setLogo] = useState('')
    const [sixeo , setSixeo] = useState('')

    const fetchData = async()=>{

        products.map((list,index)=>{
            if (list._id === productId){
                setMain(list)
                setLogo(list.image[0])
                return null
                
            }
        })

    }
    
    useEffect(()=>{
        fetchData()
    },[productId])
    
    
  return(
    <div>
        {
            main ? <div className='empty'>
            <div className='details-list'>
                <div className='details-data'>
                {
                    main.image.map((list, index)=>(
                        <img onClick={()=>setLogo(list)} src={list} key={index} alt='logo' />
                    ))
                }
                
                </div>
                <div className="details-sec">
                    <img  src={logo} alt='logo' />
                </div>
                <div className="details-info">
                    <h1>{main.name}</h1>
                    <img src={assets.star_icon} alt='logo' />
                    <img src={assets.star_icon} alt='logo' />
                    <img src={assets.star_icon} alt='logo' />
                    <img src={assets.star_icon} alt='logo' />
                    <img src={assets.star_dull_icon} alt='logo' />
                    <h3>${main.price}</h3>
                    <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                    <div className="select-size">
                        <h1>SELECT SIZE:</h1>
                        {
                            main.sizes.map((list,index)=>(
                               <button onClick={()=>setSixeo(list)}className={`${sixeo===list ? 'good' : ''}`}  type="submite">{list}</button>
                            ))
                        }
                    </div>
                    <div className="add-cart">
                    <button type='submite' onClick={()=>addTocart(main._id,sixeo)}>ADD TO CART</button>
                    </div>
                    <div className="footer">
                        <hr></hr>
                    <p>100% Original product.

Cash on delivery is available on this product.

Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
        </div>
        <div className="realated-data">
            <Realated category = {main.category} subcategory = {main.subcategory} />
        </div>

        </div> : ''
        }
        
    </div>
  )
}

export default Details