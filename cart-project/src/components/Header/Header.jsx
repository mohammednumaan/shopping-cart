import Navigation from '../Navigation/Navigation'
import './Header.css'

export default function Header({title}){
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <h1>{title}</h1>
                </div>
            </div>
            <Navigation />
        </>
    )
}