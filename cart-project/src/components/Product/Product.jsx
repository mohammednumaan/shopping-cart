import { useEffect, useState } from 'react'
import './Product.css'

export default function ProductCard(){

    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then((promise) => promise.json())
        .then((jsonData) => {
            setAllProducts(jsonData)
        })

    },[])

    return (
        <>
            <div className='card'>
                <div className='card-container'>
                    {allProducts.map((product, index) => 
                        
                        <div key={index} className='product-card'>

                            <img className='product-image' src={product.image} alt={product.title} />

                            <div className='product-title-container'>
                                <h3 className='product-name'>{product.title}</h3>
                            </div>

                            <div className='product-desc-container'>
                                <h3 className='product-desc-title'>Description</h3>
                                <p className='product-desc'>{product.description}</p>
                            </div>
                            
                        </div>
                        
                    )}
                </div>
            </div>
        </>
    )
}


