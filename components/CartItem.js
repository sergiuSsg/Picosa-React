import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { AppContext } from "../AppContext"
import useHover from "../hooks/useHover"


function CartItem({ item }) {
    const { removeFromCart } = useContext(AppContext)
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem