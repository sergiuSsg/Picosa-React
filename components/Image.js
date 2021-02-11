import React, { useState, useContext } from "react"
import { AppContext } from "../AppContext"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"


function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(AppContext)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div
            ref={ref}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt="Wallpaper" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}


Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })

}

export default Image