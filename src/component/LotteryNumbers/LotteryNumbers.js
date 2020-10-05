import React from 'react';
import styled from 'styled-components';

import LotteryNumber from './LotteryNumber/LotteryNumber';
import SortedNumbers from './SortedNumbers/SortedNumbers';
import LotteryButton from '../LotteryButton/LotteryButton';

const NumberContainer = styled.div`
    width: 90%;
    height: 70%;
    margin: auto;
    align-text: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const lotteryNumbers = (props) => {

    const transformedNumbers = Object.keys(props.numbers)
        //[first, second, third, ... , bonus];
        .map((number, index) => {
            return <LotteryNumber key={number+index}>{props.numbers[number]}</LotteryNumber>
        });

    return (
        <>
            <NumberContainer>
                {transformedNumbers}
            </NumberContainer>
            <SortedNumbers sortedNumbers={props.sortedNumbers} />
            <LotteryButton clicked={props.clicked}/>
        </>
    )
}

export default lotteryNumbers;