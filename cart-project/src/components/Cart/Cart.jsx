import { useState } from 'react'
import './Cart.css'
import Header from '../Header/Header'


export default function Cart({cart}){
    // const cartList = cart
    cart.map(product => console.log(product))
    
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



