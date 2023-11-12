import { useEffect } from 'react'
import Header from '../Header/Header'
import ProductCard from '../Product/Product'
import './Shop.css'
import getData from './Data'

export default function Shop() {

    const {allProducts, cart, isLoading, error, setCart} = getData()
    
    const addToCart = (product, count) => {
   
        let newObj = Object.assign({}, product, {count : count})
        if (cart.length === 0){
            const copyList = []
            copyList.push(newObj)
            setCart(copyList)
        }
        else{
            for (let i = 0; i < cart.length; i++){
                if (cart[i].id === product.id){
                    console.log('exis',cart[i].count)
                    console.log('new',count)

                    cart[i].count += count
                    localStorage.setItem('cartItems', JSON.stringify(cart))  
                    return;
                }
                
                console.log('else ca',cart[i].count)
                console.log('else cou',count) 
            }
            
            setCart([...cart, newObj])  
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
                    <div className='card'>
                        <div className='card-container'>
                            <ProductCard products={allProducts} addToCart={addToCart} />              
                        </div>
                    </div>
                </>
                    
            )}

        </>
    )
}

