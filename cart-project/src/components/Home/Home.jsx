import './Home.css'
import { Link } from 'react-router-dom'


export default function Home(){

    return (
        <>  

            <Link id='shop-now-btn' to={'/Shop'}>Shop Now</Link>
        </>
    )
}