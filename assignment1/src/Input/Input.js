import React from 'react';

const Input = (props) => {
    const style = {
        border: '2px solid red'
    };
    return (
        <input type='text' 
            onChange={props.changed}
            value={props.username}
            style={style}></input>
    );
    
}

export default Input;
