import React from "react"
import {useState, useEffect} from "react"
import "./styles.css"

const Context = React.createContext()

function ContextProvider({children}){
    const url = "https://raw.githubusercontent.com/sergiuSsg/Picosa-React/main/images.json"
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function toggleFavorite(id){    
        const tempArray = allPhotos.map(photo => {
            if(photo.id === id) {
              return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(tempArray)
    }

    function addToCart(image){
        setCartItems(prevCart => [...prevCart, image])
    }

    function removeFromCart(id){
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    const providerValue = {allPhotos, setAllPhotos, toggleFavorite, cartItems, setCartItems, addToCart, removeFromCart, emptyCart}
        return(
            <Context.Provider value={providerValue}>
                {children}
            </Context.Provider>
        )
}

export {ContextProvider, Context}
