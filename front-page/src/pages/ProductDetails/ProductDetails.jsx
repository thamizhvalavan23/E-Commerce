import React, { useContext, useState } from 'react'
import './ProductDetails.css'
import { StoreContext } from '../../context/Context'
import { Link } from 'react-router-dom'

const ProductDetails = ({ name, id, description, price, image, category, subcategory, sizes, bestseller }) => {
  const {currency} = useContext(StoreContext)



  return (
    <div>
      <div className="list-item">
        <div className="list-details">
        <Link to = {`/product/${id}`}> <img src={image}/> </Link>
          <div className="list-tag">
            <h2>{name}</h2>
            <p>{category}</p>
            <h3>{currency}{price}</h3>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ProductDetails