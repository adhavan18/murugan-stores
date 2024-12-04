import React from 'react'
import './Navbar.css'
function Navbar(){
    return(
        <nav className="navbar">
            <h1>Retail Store</h1>
            <ul>
                <li><a href="#finder">Login</a></li>
                <li><a href="#deals">Best Deals</a></li>
                <li><a href="#top-buys">Top Buys</a></li>
            </ul>
        </nav>
    );
}

export default Navbar