import React from 'react';
import PropTypes from 'prop-types';

Popup.propTypes = {
    
};

function Popup({ selected, closePopup }) {
    return (
        <section className='popup'>
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className="rating">Raiting: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster}/>
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    );
}

export default Popup;