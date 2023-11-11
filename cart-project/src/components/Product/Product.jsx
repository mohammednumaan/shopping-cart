import { useState } from 'react'
import Cart from '../Cart/Cart'
import './Product.css'

export default function ProductCard({products, addToCart}){

    const [activeInput, setActiveInput] = useState()
    const [inputVal, setInputVal] = useState(1)

    const handleAddToCart = (e, product) => {
        e.preventDefault()
        console.log(product.count)
        addToCart(product)
    }

    const handleInputChange = (e, product) => {
        product.count = parseInt(e.target.value)
        setInputVal(e.target.value)
      
        
    
    }

    return (
        <>
            <div className='card'>
                <div className='card-container'>
                    {products.map((product, index) => 
                        
                        <div key={index} className='product-card'>
                            <div className='product-card-container'>
                                <img className='product-image' src={product.image} alt={product.title} />

                                <div className='product-title-container'>
                                    <h3 className='product-name'>{product.title}</h3>
                                    <p className='product-price'><b>{`$${product.price}`}</b></p>
                                </div>

                                <div className='product-desc-container'>
                                    <h3 className='product-desc-title'>Description</h3>
                                    <p className='product-desc'>{product.description.slice(0,120)}</p>
                                </div>

                                <div className='add-product-container'>
                                    <input type='number' id='quantity' value={inputVal} onChange={(event) => handleInputChange(event, product)} />
                                    <button id='add-btn' onClick={(event) => handleAddToCart(event, product)}>Add To Cart</button>
                                </div>
                            </div>                       
                        </div>
                        
                    )}
                </div>
            </div>
        </>
    )
}


