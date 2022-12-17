import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Modal from './Modal';
import './MoviesGroup.css';

const MoviesGroup = (props) => {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState()

    const openModal = (data) => {
        setModal(true);
        setModalData(data);
    };

    return (
        <div className='movies-group'>
            {props.movies.map((movie, index) =>
                <div key={index} onClick={() => {openModal(movie)}}>
                    <MovieCard movie={movie} />
                </div>
            )}
            <Modal modal={modal} modal_data={modalData} onClose={() => setModal(false)}/>
        </div>
    );
};

export default MoviesGroup;
