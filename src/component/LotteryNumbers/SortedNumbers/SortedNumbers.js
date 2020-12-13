import React from 'react';
import styled from  'styled-components';

const StyledSortedNumbers = styled.div`
    font-size: 2rem;    
`

const sortedNumbers = (props) => {
    const numbers = props.sortedNumbers.join(' ');
    
    return (
        <StyledSortedNumbers>
            <p>{numbers}</p>
        </StyledSortedNumbers>
    );
}

export default sortedNumbers;