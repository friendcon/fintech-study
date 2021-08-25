import React from 'react'

const Search = ({handleInput, handleClick}) => {
    
    return (
        <div>
            <input onChange={handleInput}></input>
            <button onClick={handleClick}>검색</button>
        </div>
    )
}

export default Search

