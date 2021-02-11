import React, { useState, useContext } from "react"
import { AppContext } from "../AppContext"
import CartItem from "../components/CartItem"


function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(AppContext)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const itemsMapped = cartItems.map(item => (
        <CartItem key={item.id} item={item} />)
    )

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    console.log(itemsMapped)
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {itemsMapped}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div> :
                    <p>You have no items in the cart!</p>
            }
        </main>
    )
}

export default Cart