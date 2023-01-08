import React from 'react';
export default function SearchBox({ searchValue, setSearchValue}) {
   
    return(
        /** placeholder = what is auto-written inside the searchbar 
         *  onChange(...) = update search results while typing
         *  autoFocus = put the focus on the searchbar as the page loads
         */
    <input type='text' 
            id='MovieName' 
            placeholder='Type to search'
            value={searchValue} 
            onChange={(event) => 
                setSearchValue(event.target.value)}
            autoFocus></input> 
    )
}
