import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    handleInput: PropTypes.func,
    search: PropTypes.func
};
Search.defaultProp = {
    handleInput: null,
    search: null
}
function Search(props) {
    const { handleInput, search } = props;

    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="searchbox" 
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    );
}

export default Search;