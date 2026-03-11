import React from "react";
import './SortSelect.css'
import products from "../../data/products";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SortSelect({ 
    searchTerm, setSearchTerm,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice,
    sortPrice, setSortPrice
}) {

    const minProductValue = Math.min(...products.map(val => (val.price)))
    const maxProductValue = Math.max(...products.map(val => (val.price)))
    
    return(
        <div className="search-container">
            <form className="search-form" role="search">
                <input className="search-input" type="search" placeholder="Search" value={searchTerm} onChange={(val) => setSearchTerm(val.target.value)}/>

                <div className="price-inputs-container">
                    <input className="price-input" type="number" placeholder={minProductValue + "zł"} value={minPrice} onChange={(val) => setMinPrice(val.target.value)}/>
                    <input className="price-input" type="number" placeholder={maxProductValue + "zł"} value={maxPrice} onChange={(val) => setMaxPrice(val.target.value)}/>
                </div>

                <button className="btn btn-dark sort-button" type="button" onClick={() => setSortPrice(sortPrice=== "up" ? "down" : 'up')}>{sortPrice=== "up" ? "down" : 'up'}</button>
            </form>
        </div>
    )
}