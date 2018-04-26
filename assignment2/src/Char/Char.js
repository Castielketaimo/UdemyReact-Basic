import React from 'react';
import './Char.css';

const Char = (props) => {
    return (
        <p className='char'
            onClick={props.clicked}>Char: {props.char}</p>
    )
}

export default Char