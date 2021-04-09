import React, { useContext, useState } from "react"
import {Context} from "../AppContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const totalPrice = (cartItems.length * 5.99).toLocaleString("en-GB", {style: "currency", currency: "GBP"})
    const cartElements = cartItems.map(item => <CartItem key={item.id} item={item}/>)

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setButtonText("Place Order")
        }, 3000)
    }

    function deleteOrder(){
        emptyCart()
    }

    return (
        <main className="cart-page">
            <h2>Check out</h2>
            {cartElements}
            {
                cartItems.length > 0 ?
                <div>
                    <p className="total-cost">Total: {totalPrice}</p>
                    <div className="cart-buttons">
                        <div onClick={() => deleteOrder()} className="clear-cart-button">
                            <button>Clear Cart</button>
                        </div>
                        <div onClick={() => placeOrder()} className="order-button">
                            <button>{buttonText}</button>
                        </div>
                    </div>
                </div> :
                <p>You have no items in your cart.</p>
            } 
        </main>
    )
}

export default Cart
