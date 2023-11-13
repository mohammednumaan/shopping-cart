import rickroll from './rickroll.gif'
import './Checkout.css'
import { Link } from 'react-router-dom'

export default function CheckOut() {
    return (
        <>
            <img className="rick-roll" src={rickroll}></img>
            <Link id='home-link' to="/">Go Back?</Link>
        </>
        
    )
}