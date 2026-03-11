import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import './CartPage.css'

export default function CartPage() {
    const {cartItems, setCartItems} = useContext(CartContext)
    
    // Usuwanie i restart kosza
    const removeProducts = (id) => {
        const updatedCart = cartItems.filter((prod) => prod.id !== id)
        setCartItems(updatedCart)
    }

    const clearCart = () => (setCartItems([]))

    // kwota
    let totalCartValue = 0

    cartItems.forEach((product) =>{
        totalCartValue += product.price * product.count
    })


    //glowne dzialanie
    if (Object.keys(cartItems).length === 0){
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
                    <p>Cost: {products.price} zł</p>
                    <p>Count: {products.count}</p>
                    <button className="btn btn-danger" type="button" onClick={() => removeProducts(products.id)}>Delete</button>
                </div>

            )}
            <p><b>Total: {totalCartValue}</b></p>
            <div className="cart-buttons">
                <button className="btn btn-success" type="button" onClick={() => {
                    clearCart()
                    console.log("wyslane :D")
                }}>Buy</button>
                <button className="btn btn-danger" type="button" onClick={clearCart}>Clear</button>
            </div>
        </div>
    )}
}