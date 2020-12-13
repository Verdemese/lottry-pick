import React from 'react';
import styled from 'styled-components';

const StyledNumber = styled.div`
    font-family: inherit;
    width: 5rem;
    height: 5rem;
    padding: 0;
    margin: 0 5px;
    border: 1px solid transparent;
    box-shadow: 0 2px 3px #ccc;
    border-radius: 50px;
    background-color: rgb(3, 207, 252, 0.2);
    color: black;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-item: center;
    justify-content: center;
    text-ailgn: center;

    &.bonus {
        background-color : rgb(235, 207, 52, 0.6);
    }
`

const P = styled.p`
    margin: auto;
`

const lotteryNumber = (props) => {

    const checkBonusNumber = props.bonusNumber ? <span 
        style={{
            padding: '0 10px',
            fontSize: '4rem'
        }}
        className={'plus'}>+</span> : null
    const children = props.children ? props.children : '?';

    return (
        <>
            {checkBonusNumber}
            <StyledNumber className={props.bonusNumber ? 'bonus' : null}>
                <P>{children}</P>
            </StyledNumber>
        </>
        )
    }

export default lotteryNumber;
