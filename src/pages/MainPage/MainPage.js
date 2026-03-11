import React from 'react'
import products from '../../data/products'
import './MainPage.css'
import SortSelect from '../../components/SortSelect/SortSelect'

import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export default function MainPage (){
    const [searchTerm, setSearchTerm] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [sortPrice, setSortPrice] = useState("")

    const sortProductsByName = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ""
        const minimum = product.price >= Number(minPrice) || minPrice === ""
        const maximum = product.price <= Number(maxPrice) || maxPrice === ""

        return (matchesName && minimum && maximum)
    })

    const sortByPrice = products.sort((a, b) => {
        if (sortPrice === "up"){
            return a.price - b.price    
        }

        if (sortPrice === "down"){
            return b.price - a.price    
        }

        return 0
    })

    // Dodawanie rzeczy do koszyka + counter
    const { setCartItems} = useContext(CartContext)
    
    const addProductToCart = (product) => {
        setCartItems((prevItems) => {
            const isProductInCart = prevItems.find((item) => item.id === product.id)

            if (isProductInCart) {
                return prevItems.map((item) => item.id === product.id ? {...item, count: (item.count || 1) + 1} : item) 
            }else{
                return [...prevItems, {...product, count : 1}]
            }
        })
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

