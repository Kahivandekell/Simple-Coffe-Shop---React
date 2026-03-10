import React from 'react'
import products from '../../data/products'
import './MainPage.css'
import SortSelect from '../../Components/SortSelect/SortSelect'

import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export default function MainPage (){
    //Do dokończenia sortowanie rosnące lub malejące + dodanie strzałek czy czegosc
    const [searchTerm, setSearchTerm] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [sortPrice, setSortPrice] = useState("")

    const sortProductsByName = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ""
        const minimum = product.price >= Number(minPrice) || minPrice === ""
        const maximum = product.price <= Number(maxPrice) || maxPrice === ""
        const sortPrice = product.price //dokonczyc 

        return (matchesName && minimum && maximum)
    })

    // Dodawanie rzeczy do koszyka
    const { cartItems, setCartItems} = useContext(CartContext)
    
    const addProductToCart = (product) => {
        setCartItems([...cartItems, product])
    }

    return(
        <div className="container text-center">
            <SortSelect 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            minPrice={minPrice} setMinPrice={setMinPrice}
            maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            sortPrice={sortPrice} setSortPrice={setSortPrice}
            />

            <div className="row gx-4 gy-4">
                {sortProductsByName.map((products) => (
                <div key={products.id} className='col-12 col-sm-6 col-md-4'> 
                    <div className='single-product'>
                        <h2>{products.name}</h2>
                        <img src={products.image} alt='coffe'></img>
                        <p>{products.description}</p>
                        <p>{products.price} zł</p>
                        <button type='button' className='btn btn-dark' onClick={() => addProductToCart(products)}>Add to cart</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

