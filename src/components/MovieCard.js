import React from 'react';

import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className='movie-card'>
            <div className='movie-card-poster'>
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
                    alt={props.movie.title} />
            </div>
            <div className='movie-card-rating'>{props.movie.vote_average}</div>
            <div className='movie-card-footer'>
                <p>{props.movie.title}</p>
            </div>
        </div>
    );
};
export default MovieCard;
