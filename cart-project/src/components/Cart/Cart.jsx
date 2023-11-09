import { useState } from 'react'
import './Cart.css'
import Header from '../Header/Header'


export default function Cart(){
    const cart = JSON.parse(localStorage.getItem('cartItems')) || []
    
    return (
        <>  
            <Header title={'Cart'} />
            {cart.map((product) =>  
                <>
                    <h3 className='product-name'>{product.title}</h3>
                    <p>{product.count}</p>
                </>
            )}
        </>

    )
}



