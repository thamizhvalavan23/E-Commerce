import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/Context'
import { assets } from '../../assets/assets'
import Delivery from '../../component/delivery'

const Cart = () => {

  const { products, currency, cartitem, getupdate,tottal,delivery_fees } = useContext(StoreContext)
  const [cartdata, setCartdata] = useState([])

  useEffect(() => {
    let tempdata = []
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        if (cartitem[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item]
          })

        }
      }
    }
    setCartdata(tempdata)
  }, [cartitem])

  return (
    <div>
      <div className="cart-item">
        
        <div className="cart-data">
          <h1>YOUR</h1>
          <h1>CART</h1>
          <p></p>
        </div>
        <hr></hr>
      </div>
      <div className="cart-list">
        {
          cartdata.map((item, index) => {

            const productD = products.find((proD) => proD._id === item._id);

            return (
              <div className='main' key={index}>
                <div className="cart-collection">
                  <div className="cart-head">
                    <img src={productD.image[0]} alt='hello' />
                    </div>
                    <div className='no'>
                    <p>{productD.name}</p>
                    <div className='yes'>
                    <h1>{currency}{productD.price}</h1>
                    <h3>{item.size}</h3>
                    </div>
                  </div>
                  <div className="cart-main">
                  <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? '' : getupdate(item._id, item.size, Number(e.target.value))} type='number' value={item.quantity}  />
                  <img onClick={()=>getupdate(item._id, item.size, 0)} src={assets.bin_icon} alt='hello' />
                </div>
                </div>
                <hr></hr>
              </div>
            )
          })
        }
      </div>
      <div className="order-page">
        <Delivery />
      </div>



      
    
    </div>
  )
}

export default Cart