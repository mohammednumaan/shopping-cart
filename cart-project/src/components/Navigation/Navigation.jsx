import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation(){
    return (
        <>
            <div className='nav'>
                <div className='nav-container'>
                    <Link id='home-nav-link' to={"/"}>Home</Link>
                    <Link id='shop-nav-link' to={'/Shop'}>Shop</Link>
                    <Link id='cart-nav-link' to={'/Cart'}>Cart</Link>
                </div>
            </div>
        </>
    )
}
