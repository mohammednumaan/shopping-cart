import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ProductCard from '../Product/Product'
import './Shop.css'

export default function Shop() {

    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then((response) => {
                if (response.ok === false || response.status >= 400) throw new Error('Sorry We Are Unable To Fetch The Data :(')
                else return response.json()
            })

            .then((data) => {
                setAllProducts(data)
                setError(null)
            })
            .catch((error) => {
                setError(error)
                setAllProducts([])
            })
            .finally(() => setIsLoading(false))
    },[])

    return (
        <>  
            <Header title={'Shop'} />
            ({error && <h1 className='error-text'>Sorry We Are Unable To Fetch The Data :(</h1>})
            ({isLoading && <h1 className='loading-text'>Loading...</h1>})
            {(isLoading === false) && (
                <>
    
                    <ProductCard products={allProducts} />
                </>
                
            )}
        </>
    )
}

