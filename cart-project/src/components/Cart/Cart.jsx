import { useEffect, useState } from 'react'
import './Cart.css'
import Header from '../Header/Header'



export default function Cart(){
    
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

    const handleRemove = (product) => {
        let updatedCart = cart.filter(item => item.id != product.id)
        setCart(updatedCart)
    }

    useEffect(() => {
        
        let totalPrice = 0
        if (cart.length === 0 ) setTotal(0)

        cart.map(item => {
            totalPrice += (item.price * item.count)
            setTotal(totalPrice)
        })
    },[cart]);
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart))
        
    },[cart])

    
    
    return (
        <>  
            <Header title={'Cart'} />

            <div data-testid='checkout' className='cart-checkout-container'>
                <h2>Total</h2>
                <div data-testid='total' className='cart-total'>{`$${total}`}</div>
                <button id='checkout-btn'>Checkout</button>
            </div>
            
            {cart.length === 0 && <h2 className='empty-cart-msg' data-testid='empty'>Your Cart Is Empty! Add Items To Fill Your Cart!</h2>}
            
            <div className='cart-products'>
                {cart.map((product) =>
                    <>
                        <div key={product.id} className='cart-products-container' data-testid={`cart-item-${product.id}`}>

                            <img className='cart-product-image' src={product.image} />

                            <div className='cart-product-details'>
                                <h3 className='cart-product-name'>{product.title}</h3>
                                <p className='cart-product-count'>{`Quantity : ${product.count}`}</p>
                                <p className='cart-product-price'>{`Price : $${product.count * product.price}`}</p>
                                <button id='remove-product' data-testid={`cart-remove-item-${product.id}`} onClick={() => handleRemove(product)}>Remove</button>
                            </div>
                            
                        </div>
                    </>
                )}  
            </div>
        </>
    )
}



