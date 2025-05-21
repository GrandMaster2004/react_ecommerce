import React from 'react'
import {createContext} from "react";
import { products } from '@/assets/assets';
const ShopContext = (props) => {
    const currency = "$";
    const value = {
        products, currency, delivery_fee
    }
  return (
    <ShopContext.Provider value={value}>
      {props.childer}
    </ShopContext.Provider>
  )
}

export default ShopContext
