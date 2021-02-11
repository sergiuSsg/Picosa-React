import React, { useState, useEffect } from "react"
const AppContext = React.createContext()

function AppContextProvider({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updatedArray)
    }

    return (
        <AppContext.Provider value={{ allPhotos, toggleFavorite, addToCart, removeFromCart, emptyCart, cartItems }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }