import React from 'react';

const Validation = (props) => {
    let outputText='Text too short'
    if(props.length > 5) {
        outputText = 'Text long enough'
    }
    return (
        <div>
            <p>Length : {props.length}</p>
            <p>{outputText}</p>
        </div>
    )

}

export default Validation