import { useEffect, useState } from "react"

export default function getData(){
    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem('allProducts')) || []) 
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
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
    },[allProducts])

    useEffect(() => {
        localStorage.setItem('allProducts', JSON.stringify(allProducts))
    }, [allProducts])

    return { allProducts, cart, isLoading, error, setCart}
}