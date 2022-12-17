import React from 'react';

import './SearchBox.css'

const SearchBox = (props) => {
    return (
        <div className='search-box'>
            <img src='search-icon.svg' alt='Search Icon' />
            <input
                className='search-input'
                value={props.searchValue}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Search for a movie'
            >
            </input>
        </div>
    );
};

export default SearchBox;
