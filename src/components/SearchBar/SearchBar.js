import React, {useState, useEffect} from 'react'
import './SearchBar.css'

function SearchBar({input, setInput, select, setSelect}) {

    
  

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const handleFilterChange = (event) => {
        setSelect(event.target.value)
    }
   
    
    return (
        <div className='searchbar'>
            <div className="search__input">
                <input 
                type="text" 
                value={input}
                onChange={handleInputChange}
                placeholder='Search profile'
                />
            </div>

            <div className="filter__input"  >
                <label htmlFor="filter">Filter by gender:</label>
                <select name="filter" id="" value={select} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar
