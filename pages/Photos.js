// home page

import React, { useContext } from "react"
import Image from "../components/Image"
import { getClass } from "../utils"
import { AppContext } from "../AppContext"

function Photos() {
    const { allPhotos } = useContext(AppContext)
    const photosMapped = allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            <h1>Images</h1>
            {photosMapped}
        </main>
    )
}

export default Photos