import { useState } from 'react'
import './Product.css'

export default function ProductCard({products, addToCart}){

    const [activeInput, setActiveInput] = useState(null)
    const [inputVal, setInputVal] = useState(1)

    const handleAddToCart = (e, product) => {
        e.preventDefault()
        addToCart(product, inputVal)
        setActiveInput(null)
    
    }

    const handleInputChange = (e, product) => {
        setInputVal(+e.target.value)
        setActiveInput(product.id)
      
    }

    const handleIncrement = (product) => {
        setInputVal(prev => prev + 1)
        setActiveInput(product.id)
        
    }

    const handleDecrement = (product) => {
        setInputVal(prev => prev !== 0 ? prev - 1 : 0)
        setActiveInput(product.id)
    }


    return (
        <>
            {products.map((product, index) => 

                <div key={index} className='product-card'>
                    <div className='product-card-container' data-testid={`product-${index}`}>

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

                            <div className='product-quantity'>

                                <button id='decrement' onClick={() => handleDecrement(product)}>-</button>

                                <input id={index} type='number' className='quantity' value={activeInput === product.id ? inputVal : 1} onChange={e => handleInputChange(e, product)} min={0} />

                                <button id='increment' onClick={() => handleIncrement(product)}>+</button>
                            </div>

                            <button id='add-btn' onClick={(event) => handleAddToCart(event, product)}>Add To Cart</button>
                        </div>
                        
                    </div>
                </div>                                 
            )}
        </>
    )
}


