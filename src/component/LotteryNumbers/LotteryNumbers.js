import React from 'react';
import styled from 'styled-components';

import LotteryNumber from './LotteryNumber/LotteryNumber';
import SortedNumbers from './SortedNumbers/SortedNumbers';
import LotteryButton from '../LotteryButton/LotteryButton';

const NumberContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    align-text: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const lotteryNumbers = (props) => {

    let transformedNumbers;
    const numbers = props.numbers

    transformedNumbers = Object.keys(numbers)
        //[first, second, third, ... , bonus];
        .map((order, index) => {

            if (Object.keys(numbers).length - 1 === index) {
                return <LotteryNumber bonusNumber key={order+index}>{numbers[order]}</LotteryNumber>
            }

            return <LotteryNumber key={order+index}>{numbers[order]}</LotteryNumber>
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