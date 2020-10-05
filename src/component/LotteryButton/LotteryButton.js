import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    outline: none;
    width: 70px;
    height: 70px;
    margin-top: 25px;
    background-color: rgb(148, 144, 143, 0.4);
    color: white;

    &:active {
        background-color: rgb( 97, 93, 92, 0.4 );
    }

`

const lotteryButton = (props) => (
    <StyledButton onClick={props.clicked}>GO get and win!!</StyledButton>
)

export default lotteryButton;