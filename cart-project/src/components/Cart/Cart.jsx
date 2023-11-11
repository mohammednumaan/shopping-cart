import { useEffect, useState } from 'react'
import './Cart.css'
import Header from '../Header/Header'



export default function Cart(){
    
    const [total, setTotal] = useState(0)
    const cart = JSON.parse(localStorage.getItem('cartItems')) || []

    useEffect(() => {
        console.log('hi')
        let totalPrice = 0
        cart.map(item => {
            console.log(totalPrice)
            totalPrice += (item.price * item.count)
            setTotal(totalPrice)
        })
    });
    // getTotalPrice() 
    

    return (
        <>  
            <Header title={'Cart'} />
            <div className='cart-checkout-container'>
                <h2 >Total</h2>
                <div className='cart-total'>{total}</div>
            </div>
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



