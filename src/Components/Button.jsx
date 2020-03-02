import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <>
            <button className={`btn btn-${props.type}`} 
                    onClick={props.handleClick} >
                { props.displaydata }
            </button>
        </>
    )
}

Button.propTypes = {
    type : PropTypes.string.isRequired,
    displaydata : PropTypes.string.isRequired
};

export default Button;