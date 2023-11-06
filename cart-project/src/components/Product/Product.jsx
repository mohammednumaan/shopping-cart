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
                        
                        <div key={index} className='card'>

                            <img className='product-image' src={product.image} alt={product.title} />
                            <p className='product-name'>{product.title}</p>
                        </div>
                        
                    )}
                </div>
            </div>
        </>
    )
}


