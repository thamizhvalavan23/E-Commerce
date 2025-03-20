import React, { useContext } from 'react'
import './Product.css'
import { StoreContext } from '../../context/Context'
import ProductDetails from '../ProductDetails/ProductDetails'

const Product = () => {
  const {products , currency , delivery_fees} = useContext(StoreContext)
  return (
    <div>
      <div className="product-list">
        <div className="product-title">
          <h1>Latest</h1><p>Collection</p>
          <hr></hr>
        </div>
        <div className="loer">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero sapiente</span>
        </div>
        <div className="product-details" >
          {
            products.map((list, index)=>(
             <div className="product-data">
             <ProductDetails key={index} name={list.name} id={list._id} description ={list.description} price={list.price} image = {list.image[0]} category={list.category} subcategory = {list.subCategory} sizes = {list.sizes} bestseller = {list.bestseller}></ProductDetails>
              </div>
            ))
          }
        </div>
  
      </div>
  
    </div>
  )
}

export default Product