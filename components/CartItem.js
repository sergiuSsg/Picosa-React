import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../AppContext"
import useHover from "../hooks/useHover"

function CartItem({item}){
    const {removeFromCart} = useContext(Context)
    const imagePrice = 5.99
    const [hovered, enter, leave] = useHover()
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item"> 
            <i 
                onClick={() => removeFromCart(item.id)} 
                className={iconClassName} 
                onMouseEnter={() => enter()}
                onMouseLeave={() => leave()}
            >
            </i>
            <img src={item.url} width="130px" alt="Wallpaper" />
            <p>Resolution: {item.resolution}</p>
            <h4>{imagePrice}</h4>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
