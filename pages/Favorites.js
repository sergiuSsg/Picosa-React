import React, {useState, useContext, useEffect} from "react"
import {Context} from "../AppContext"
import Image from "../components/Image"

function Favorites() {
    const {allPhotos, setAllPhotos} = useContext(Context)
    const [favPhotos, setFavPhotos] = useState([])

    useEffect(() => {
        setFavPhotos(allPhotos.map(photo => {
            return photo.isFavorite === true && <Image key={photo.id} img={photo} className="fav-photo" />
        }))
    }, [allPhotos])


    function clearFavorites () {
        setAllPhotos(prevPhotos => {
           return prevPhotos.map(photo => photo.isFavorite === true ? {...photo, isFavorite: false} : photo)
        })
    }

    return (
        <div className="favorites-page">
            <h2>Favorited Photos</h2>
            <main className="fav-photos">
                {favPhotos}
            </main>
            {
                favPhotos.some(photo => typeof photo === "object") ?
                <div className="delete-favorites-button" onClick={() => clearFavorites()}>
                    <button>Clear Favorites</button>
                </div> :
                <p>You have no favorited Images!</p>
            }
        </div>
    )
}

export default Favorites


