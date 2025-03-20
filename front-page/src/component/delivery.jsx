import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './delivery.css';
import { StoreContext } from '../context/Context';

const Delivery = () => {
    const { tottal,currency,delivery_fees} = useContext(StoreContext)

   
  return (
    <div>
        <div className="cart-amount">
          <h1 className='fineal'> CART CASH</h1>
        <div className="subtotal">
          <p>Subtotal</p>
          <span>{currency}{tottal()}.00</span>
        </div>
        <hr className='on'></hr>
        <div className="shipping">
          <p>Shipping Charge</p>
          <span>{currency}{delivery_fees}.00</span>
        </div>
        <hr className='on'></hr>
        <div className="tottal">
          <p>TOTAL</p>
          <span>{currency}{tottal() + delivery_fees}.00 </span>
        </div>
      
      <div className="checkout">
      <Link to = "/order" ><button type='submite'>PROCEED TO CHECKOUT</button></Link>
      </div>
      </div>
     
    </div>
  )
}

export default Delivery