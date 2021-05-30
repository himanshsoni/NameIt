import React from 'react'
import './SearchBox.css'

const SearchBox = ({onInputChange}) => {
    return (
        <div className="Search-container">
            <input type="text" 
             onChange={(event) => onInputChange(event.target.value)}
             className="search-input"
              placeholder="Type Keywords"/>
        </div>
    )
}



export default SearchBox
