import React from "react";
import './SortSelect.css'
import { useState, createContext} from "react";
import products from "../../data/products";




export default function SortSelect({ searchTerm, setSearchTerm }) {

    const minProductValue = Math.min(...products.map(val => (val.price)))
    const maxProductValue = Math.max(...products.map(val => (val.price)))

    return(
        <div className="search-container">
            <form className="search-form" role="search">
                <input className="search-input" type="search" placeholder="Search" value={searchTerm} onChange={(val) => setSearchTerm(val.target.value)}/>
                <input className="search-input" type="number" placeholder={minProductValue}/>
                <input className="search-input" type="number" placeholder={maxProductValue}/>
                
                <button className="btn btn-dark" type="button">up</button>
            </form>
        </div>
    )
}