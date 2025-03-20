import { useContext } from 'react';
import './Order.css';
import { StoreContext } from '../../context/Context';

const Order = () => {

  const { delivery_fees, tottal, currency} = useContext(StoreContext)
 
  return (
    <div>
      <div className="amma">
        <div className="order-contact">
          <form>
            <div className="name">
              <input type='text' placeholder='First Name'/>
              <input type='text' placeholder='Last Name'/>
            </div>
            <div className="email">
              <input type=' text' placeholder='E-Mail Address'/>
            </div>
            <div className="street">
              <input type='text' placeholder='street' />
            </div>
          <div className="city">
            <input type='text' placeholder='City' />
            <input type='text' placeholder='State' />
          </div>
          <div className="code">
            <input type='number' placeholder='ZipCode' />
            <input type='text' placeholder='Country' />
          </div>
          <div className="phone">
            <input type='number' placeholder='Phone' />
          </div>
          </form>
        </div>
        <div className="off-data">
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
      <button type='submite'>PROCEED TO CHECKOUT</button>
      </div>
      </div>
     
        </div>
      </div>
    </div>
  )
}

export default Order