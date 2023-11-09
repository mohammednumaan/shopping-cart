import { useState } from 'react'
import './Cart.css'
import Header from '../Header/Header'


export default function Cart(){
    const cart = JSON.parse(localStorage.getItem('cartItems')) || []
    
    return (
        <>  
            <Header title={'Cart'} />
            <div className='cart-products'>
                {cart.map((product) =>
    
                    <>
                        
                        <div className='cart-products-container'>
                            <img className='cart-product-image' src={product.image} />
                            <h3 className='cart-product-name'>{product.title}</h3>
                            <p className='cart-product-count'>{product.count}</p>
                        </div>
                    </>
                )}  
            </div>
            
        </>

    )
}



