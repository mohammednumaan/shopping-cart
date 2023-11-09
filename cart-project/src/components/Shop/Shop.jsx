import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ProductCard from '../Product/Product'
import './Shop.css'
import Cart from '../Cart/Cart'
import getData from './Data'


export default function Shop() {

    const {allProducts, cart, isLoading, error, setCart} = getData()
    
    // const [allProducts, setAllProducts] = useState([])
    // const [cart, setCart] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState(null)

    const addToCart = (product) => {
        if (cart.length === 0) {
            const copyList = []
            copyList.push(product)
            setCart(copyList)
        
        }

        else {
            setCart([...cart, product])
        }

        
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart))
    },[cart])

    return (

        <>  
            <Header title={'Shop'} />
            ({error && <h1 className='error-text'>Sorry We Are Unable To Fetch The Data :(</h1>})
            ({isLoading && <h1 className='loading-text'>Loading...</h1>})
            {(isLoading === false) && (
                <>
                    <ProductCard products={allProducts} addToCart={addToCart} />              
                </>
                
            )}
        </>
    )
}

