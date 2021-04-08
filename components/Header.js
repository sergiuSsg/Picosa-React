import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../AppContext";

function Header() {
    const {cartItems, allPhotos} = useContext(Context)
    const classClassName = cartItems.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    const starClassName = allPhotos.some(photo => photo.isFavorite === true) ? "ri-heart-fill" : "ri-heart-line"
    
    return (
        <header>
            <Link to="/" style={{ marginLeft: "10%" }}>
                <h2>Picosa</h2>
            </Link>
            <div style={{ marginRight: "10%"}}>
            <Link to="/cart">            
                <i className={`${classClassName} fillCart ri-fw ri-2x`}></i>
            </Link>
            <Link to="/favorites" style={{ marginLeft: "50px"}}>            
                <i className={`${starClassName} ri-fw ri-2x`}></i>
            </Link>
            </div>
        </header>
    )
}

export default Header
