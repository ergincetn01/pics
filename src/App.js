import React, { useState } from "react";
import SearchBar from './Components/SearchBar'
import searchImages from "./api";
import ImageList from './Components/ImageList'

function App() {
    const [images, setImages]=useState([])
        const handleSubmit =async(term)=> {
        const res= await searchImages(term);
        setImages(res)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
        
    )
}

export default App;