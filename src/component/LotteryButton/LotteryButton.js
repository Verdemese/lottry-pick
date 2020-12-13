import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    outline: none;
    font-size: 2rem;
    width: 8rem;
    height: 4rem;
    margin-top: 25px;
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.3);
    background-color: #fff;
    color: #666;
    text-align: center;

    &:active {
        background-color: rgb( 97, 93, 92, 0.4 );
    }

`

const lotteryButton = (props) => (
    <StyledButton onClick={props.clicked}>Start!!</StyledButton>
)

export default lotteryButton;