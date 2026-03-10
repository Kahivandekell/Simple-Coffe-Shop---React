import React from 'react'
import products from '../../data/products'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainPage.css'
import { useState } from 'react'
import SortSelect from '../../Components/SortSelect/SortSelect'



export default function MainPage (){

    const [searchTerm, setSearchTerm] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [sortPrice, setSortPrice] = useState("")

    const sortProductsByName = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ""
        const minimum = product.price >= minPrice || minPrice === ""
        const maximum = product.price <= maxPrice || maxPrice === ""
        const sortPrice = product.price 
        return (matchesName && minimum && maximum)
    
    })



/* 
    const sortPrice = products.filter((product) => (
        product.price
    )) */

    return(
        <div className="container text-center">
            <SortSelect 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            minPrice={minPrice} setMinPrice={setMinPrice}
            maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            />

            <div className="row gx-4 gy-4">
                {sortProductsByName.map((products) => (
                <div key={products.id} className='col-12 col-sm-6 col-md-4'> 
                    <div className='single-product'>
                        <h2>{products.name}</h2>
                        <img src={products.image} alt='coffe'></img>
                        <p>{products.description}</p>
                        <p>{products.price} zł</p>
                        <button type='button' className='btn btn-dark'>Add to cart</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

