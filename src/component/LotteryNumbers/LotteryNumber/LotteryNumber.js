import React from 'react';
import styled from 'styled-components';

const StyledNumber = styled.div`
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
    border: 1px solid black;
    border-radius: 50px;
    background-color: rgb(3, 207, 252, 0.4)
    color: white;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-item: center;
    justify-content: center;
    text-ailgn: center;
`

const P = styled.p`
    margin: auto;
`

const lotteryNumber = (props) => (
    <StyledNumber>
        <P>{props.children}</P>
    </StyledNumber>
)

export default lotteryNumber;
