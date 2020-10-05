import React from 'react';

const sortedNumbers = (props) => {
    const numbers = props.sortedNumbers.join(' ');
    
    return (
        <div>
            <p>{numbers}</p>
        </div>
    );
}

export default sortedNumbers;