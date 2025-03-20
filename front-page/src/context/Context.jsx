import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";

export const StoreContext = createContext()


const StoreContextProvider = (props)=>{

    const [search , setSearch] = useState('') 
    const [navshow , setNavshow] = useState(true)
    const [cartitem , setCartitem] = useState ({})  
    const currency = "$";
    const delivery_fees = 10

    const addTocart = async(itemId, size)=>{

        if (!size){
            toast.error('Please Select Size')
            return;
            
        }

        let cartData = structuredClone(cartitem);

        if (cartData[itemId]){

            if (cartData[itemId] [size]) {
                cartData[itemId][size] +=1;  
            }else{
                cartData[itemId][size] = 1
           
        }
        }else{
            cartData[itemId]= {}
            cartData[itemId][size] = 1
        }
         setCartitem(cartData)
    }

    
    const totolCount = ()=>{

        let count = 0
        for(const items in cartitem){
            for(const item in cartitem[items]){
               try {
                if(cartitem[items][item] > 0) {
                    count += cartitem[items] [item] 
                    
                }
                
               } catch (error) {
                
               }
            }
        }
        return count;
    }


     const getupdate = async(itemId,size,quantity)=>{
        let cartdata = structuredClone(cartitem);
        cartdata[itemId][size] = quantity
        setCartitem(cartdata)

     }
     const tottal = async =>{
        let totalprice = 0
        for(const items in cartitem){
            let iteminfo = products.find((prod)=>prod._id === items);
             for(const item in cartitem[items]){
                try {
                    if(cartitem[items][item] >0 ){
                        totalprice += iteminfo.price * cartitem[items][item] 
                    }
                    
                } catch (error) {
                    
                }
             }
        }
        return totalprice;
     }
    useEffect(()=>{
        console.log(cartitem)
    },[cartitem])

    const value = {
        products,currency,delivery_fees,search,
        setSearch,navshow,setNavshow, cartitem,setCartitem,addTocart,totolCount,getupdate,tottal
    }


return(
    <StoreContext.Provider value={value}>
       {props.children}
    </StoreContext.Provider>
)
}

export default StoreContextProvider