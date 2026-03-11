import React from "react";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";
import './CartPage.css'

export default function CartPage() {
    const {cartItems, setCartItems} = useContext(CartContext)
    
    // Usuwanie i restart kosza
    const removeProducts = (id) => {
        const updatedCart = cartItems.filter((prod) => prod.id !== id)
        setCartItems(updatedCart)
    }

    const clearCart = () => (setCartItems([]))
    
    // Zliczanie produktów
    const countedProducts = {}

    cartItems.forEach((product) => {
        const newProduct = product.id
        if (countedProducts[newProduct]){
            countedProducts[newProduct] += 1
        } else{
            countedProducts[newProduct] = 1
        }
    })
    console.log(countedProducts)

    if (Object.keys(cartItems).length === 0){
        console.log("wykona sie")
        return(
            <div className="Cart">
                <h4>Nie masz jeszcze żadnych rzecz w koszyku</h4>
            </div>
        )
    }else{
    return(
        <div className="Cart">
            {cartItems.map((products) => 
                <div className="cart-prod">
                    <h2>{products.name}</h2>
                    <p>Cost: <b>{products.price}</b></p>
                    <p>Count: {products.count}</p>
                    <button className="btn btn-danger" type="button" onClick={() => removeProducts(products.id)}>Delete</button>
                </div>

            )}
            <button className="" type="button" onClick={() => removeProducts()}>Buy</button>
            <button className="" type="button" onClick={clearCart}>Clear</button>
        </div>
    )}
}