import { useState } from 'react'
import './Cart.css'

export function Cart(addedProduct = {}){
    const [cart, setCart] = useState([])

    const addToCart = () => {
        let newObj = Object.assign({}, addedProduct, {count : 1})

        if (cart.includes(newObj)){
            newObj.count++
            setCart(...cart, newObj)
        }
        
    }

    addToCart()
    return (
        <>
            {cart.map(product => {
                
                <>
                    <h3 className='product-name'>{product.title}</h3>
                    <p>{product.count}</p>
                </>
            })}
        </>

    )
}

export default function add(p){
    <Cart addedProduct={p} />
}


