import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <div className="house-comp">
            <nav className="nav">
                <Link to='/'><i className="fas fa-home"></i>Houser</Link>
            </nav>
        </div>
    )
}

export default Header