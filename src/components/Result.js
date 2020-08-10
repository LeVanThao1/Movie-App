import React from 'react';
import PropTypes from 'prop-types';

Result.propTypes = {
    
};

function Result({ result, openPopup }) {
    return (
        
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    );
}

export default Result;