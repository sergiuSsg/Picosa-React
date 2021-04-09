import React, {useContext} from "react"
import {Context} from "../AppContext"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
import "../styles.css"

function Image({className, img}) {
    const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context)
    const [hovered, enter, leave] = useHover()

    function heartIcon(){
        if (img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon(){
        if (cartItems.some(item => item.id === img.id)){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return(
        <div
            onMouseEnter={() => enter()}
            onMouseLeave={() => leave()}
            className={`${className} image-container`}
        >
            {heartIcon()} 
            {cartIcon()}
            <img src={img.url} className="image-grid" alt="Wallpaper"/>
        </div>
    )
}

Image.ptopTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
