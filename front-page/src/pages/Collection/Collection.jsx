import React, { useContext, useEffect, useState } from 'react'
import './Collection.css'
import { StoreContext } from '../../context/Context'
import ProductDetails from '../ProductDetails/ProductDetails'

const Collection = () => {
  const {products ,search,setNavshow} = useContext(StoreContext)
  const [category ,setCategory] = useState([])
  const [pro , setPro] = useState([])
  const [subCategory , setSubCategory] = useState([])



  const toglechange =(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const toglechanges =(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  useEffect(()=>{
   result(products)

  },[category , subCategory,search,setNavshow])

  const result = (e)=>{

    let productlist = products.slice()

    if(search && setNavshow){
      productlist = productlist.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productlist= productlist.filter(item=> category.includes(item.category));
    }
    if(subCategory.length > 0){
      productlist= productlist.filter(item=> subCategory.includes(item.subCategory));
    }

    setPro(productlist)


  }


    return (
    <div>
      <hr className='light'></hr>
      <div className="filter-tag">
      <div className="filter">
        <div className="filter-data">
          <h1>FILTER</h1>
        </div>
        <div className="filter-list">
          <h1>Category</h1>
          <p><input type='checkbox' onChange={toglechange}value={'Men'}/> Men</p>
          <p><input type='checkbox' onChange={toglechange}value={'Kids'}/> Kids</p>
          <p><input type='checkbox' onChange={toglechange}value={'Women'}/> Women</p>
        </div>
        <div className="filter-list">
          <h1>Type</h1>
          <p><input type='checkbox' onChange={toglechanges}value={'Topwear'}/> Topwear</p>
          <p><input type='checkbox' onChange={toglechanges}value={'Bottomwear'}/> Bottomwear</p>
          <p><input type='checkbox' onChange={toglechanges}value={'Winterwear'}/> Winterwear</p>
        </div>
      </div>
      <div className="page-list">
        <div className="page-head">
       <h1>All <b>Collection</b></h1> <hr></hr>
        </div>
        <div className="page-data">
          {
            pro.map((list, index)=>(
              <div className="page-item" key={index}>
                <ProductDetails key={index} name={list.name} id={list._id} description ={list.description} price={list.price} image = {list.image[0]} category={list.category} subcategory = {list.subCategory} sizes = {list.sizes} bestseller = {list.bestseller}></ProductDetails>
              </div>
            ))
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Collection