import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { AppContext } from "../AppContext"

function Header() {
    const { cartItems } = useContext(AppContext)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/">
                <h2>Picosa</h2>
            </Link>
            <Link to="/cart">
                <i className={`${cartClassName} fillCart ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
