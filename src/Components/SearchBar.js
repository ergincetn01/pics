import React, {useState} from "react";
import './SearchBar.css'

function SearchBar({onSubmit}){

    const [term, setTerm]=useState('')

    const handleFormSubmit=(event)=> {
        event.preventDefault()
        console.log('handlesubmit is running')
        onSubmit(term)
    }

    const handleChange=(e)=> {
        setTerm(e.target.value);        
    }
    
    return (
        <div className="searchBar">
            <form onSubmit={handleFormSubmit}>
                <row>
                    <input placeholder="Search anything..." value={term}
                onChange={handleChange}  />
                <button type="submit">Search images</button>
                </row>   
            </form>
        </div>
    )
}

export default SearchBar;