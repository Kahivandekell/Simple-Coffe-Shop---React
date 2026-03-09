import React from 'react'
import products from '../../data/products'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MainPage.css'

export default function MainPage (){
    return(
        <div className="container text-center">
            <div class="row gx-4 gy-4">
                {products.map((products) => (
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

