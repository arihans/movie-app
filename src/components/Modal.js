import React from 'react';
import moment from 'moment';

import './Modal.css';

const Modal = (props) => {
    return (
        <>
            {props.modal && (
                <div className='modal'>
                    <div className='overlay' onClick={props.onClose}></div>
                    <div className='modal-box'>
                        <div className='modal-title'>{props.modal_data.title}</div>
                        <div className='modal-body'>
                            <img src={`https://image.tmdb.org/t/p/w500/${props.modal_data.poster_path}`}
                                className='modal-body-image' alt={props.modal_data.title} />
                            <div className='modal-body-text'>
                                    <p><b>Release date: </b>{moment(props.modal_data.release_date).format("MMM DD, YYYY")}</p>
                                    <p>{props.modal_data.overview}</p>
                                    <p><b>{props.modal_data.vote_average}</b> / 10 ({props.modal_data.vote_count} total votes)</p>
                            </div>
                        </div>
                        <div className='close-modal' onClick={props.onClose}>
                            <img src='modal-close-icon.svg' alt='🗙'/>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default Modal;
