import React from "react";
import { useState, createContext} from "react";

export const CartContext = createContext()

export function CartProvider(props){
    const [cartItems, setCartItems] = useState([])

    const value ={
        cartItems,
        setCartItems
    }

    return(
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    )
}