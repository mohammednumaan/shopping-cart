import Navigation from '../Navigation/Navigation'
import PropTypes from 'prop-types'
import './Header.css'

export default function Header({ title }){
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

Header.propTypes = {
     title : PropTypes.string
}