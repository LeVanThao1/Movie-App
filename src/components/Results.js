import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

Results.propTypes = {
    results: PropTypes.array
};
Results.defaultProps = {
    results: []
}
function Results({ results, openPopup }) {
    return (
        <section className='results'> 
            {
                results.map((result, i) => (
                    <Result key={i} result={result} openPopup={openPopup}/>
                ))
            }
        </section>
    );
}

export default Results;