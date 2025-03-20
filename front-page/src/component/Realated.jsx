import React, { useContext, useEffect, useState } from 'react'
import './Realated.css'
import { StoreContext } from '../context/Context'
import ProductDetails from '../pages/ProductDetails/ProductDetails'

const Realated = ({category, subcategory}) => {
    const [realat , setRealat] = useState([])
    const {products} = useContext(StoreContext)

    useEffect(()=>{
        if (products.length > 0) {

            let data = products.slice();

            data = data.filter((item)=> category === item.category);
            data = data.filter((item)=> subcategory === item.subcategory)

            setRealat(data.slice(0,5))
            
        }


    },[products])

  return (
    <div>
        <div className="old">
            <div className="old-data">
                <h1>TOP RELATED :</h1>
            </div>
            <div className="old-list">
            {
                realat.map((list,index)=>(
                    <ProductDetails key={index} name={list.name} id={list._id} price={list.price} image = {list.image[0]}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Realated