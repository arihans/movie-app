import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MoviesGroup from './components/MoviesGroup';

import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        // const url = `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US`;
        //const url = `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false`
        setMovies([]);

        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`;

        if (searchValue) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue}`;
        }

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson)
        if (responseJson.results) {
            setMovies(responseJson.results);
        }
    };

    useEffect(() => {
        document.title = "Movies";
    }, []);

    useEffect(() => {
        let movieRequestTimeout = setTimeout(() => {
            getMovieRequest(searchValue);
        }, 500);

        return () => clearTimeout(movieRequestTimeout);
    }, [searchValue]);

    return (
        <div className='App'>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <MoviesGroup movies={movies} />
        </div>
    );
};

export default App;
