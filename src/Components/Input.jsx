import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <>
            <input  
                type={props.type}
                name={props.name}
                value={props.value}
                className={props.class}
                onChange={props.handleChange} 
                required={props.required}
            />
        </>
    );
}

Input.propTypes = {
    type : PropTypes.string.isRequired,
    class : PropTypes.string.isRequired,
}
Input.defaultProps = {
    required : true
}

export default Input;