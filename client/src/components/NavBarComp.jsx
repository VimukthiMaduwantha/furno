import React, { useState } from 'react'
import '../styles/NavBarStyle.css'

function NavBarComp() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="Navbar">
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/shop">Shop</a>
                    <a href="">Offers</a>
                    <a href="">Categories</a>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </>
    )
}

export default NavBarComp