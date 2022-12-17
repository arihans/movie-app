import React from 'react';
import SearchBox from './SearchBox';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header-main'>
                <img className='logo' src='logo.svg' alt='logo'></img>
                <SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
            </div>
            <hr/>
            <div className='movies-group-heading'>
                {props.searchValue ? 'Search Results' : 'Most Recent Movies'}
            </div>
        </div>
    );
};

export default Header;
