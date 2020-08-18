import React, { Component } from 'react'

function Navbar() {
    return (
        <nav dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </nav>
    )
}

export default Navbar;