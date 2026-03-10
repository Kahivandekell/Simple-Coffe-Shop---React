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

    const sortProducts = products.filter((product) => (
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    return(
        <div className="container text-center">
            <SortSelect searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            <div className="row gx-4 gy-4">
                {sortProducts.map((products) => (
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

