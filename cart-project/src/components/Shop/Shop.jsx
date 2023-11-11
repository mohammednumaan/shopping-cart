import { useEffect } from 'react'
import Header from '../Header/Header'
import ProductCard from '../Product/Product'
import './Shop.css'
import getData from './Data'

export default function Shop() {

    const {allProducts, cart, isLoading, error, setCart} = getData()
    
    console.log(allProducts)
    const addToCart = (product) => {
   

        if (cart.length === 0){
            const copyList = []
            copyList.push(product)
            setCart(copyList)
        }
        else{
            for (let i = 0; i < cart.length; i++){
                if (cart[i].id === product.id){
                    cart[i].count++
                    localStorage.setItem('cartItems', JSON.stringify(cart))  
                    return;
                } 
            }
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

