import React, {useContext, useState} from "react"
import Image from "../components/Image"
import {Context} from "../AppContext"
import {getClass} from "../utils/utilily"
import ReactPaginate from "react-paginate"

function Photos() {
    const {allPhotos} = useContext(Context)
    const [pageNumber, setPageNumber] = useState(0)
    const photosPerPage = 42
    const photosCounter = pageNumber * photosPerPage
    const pageCount = Math.ceil(allPhotos.length / photosPerPage)
    
    const photoComponents = allPhotos
        .slice(photosCounter, photosCounter + photosPerPage)
        .map(photo => (
        <Image key={photo.id} img={photo} className={getClass(photo.id) } />
    ))
    
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <div>
            <main className="photos">
                {photoComponents}
            </main>
            <br/>
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
        </div>
    )
}

export default Photos
