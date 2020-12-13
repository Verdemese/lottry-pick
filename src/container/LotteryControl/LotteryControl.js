import React, { Component } from 'react';
import styled from 'styled-components';

import LotteryNumbers from '../../component/LotteryNumbers/LotteryNumbers';

const StyledDiv = styled.div`
    background-color: #eee;
    border: 2px solid pink;
    border-radius: 20px;
    height: 150px;
    width: 800px;
    margin: auto;
    text-align: center;
`

class LotteryControl extends Component {
    state = {
        numbers: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0,
            sixth: 0,
            bonus: 0
        },
        sortedNumbers: []
    }

    pickRandomNumberHandler = () => {

        const lotteryNumberContainer = []; // [1~45]
        const pickedNumberContainer = []; // [1,2,3,4,5,6]
        const numbers = { ...this.state.numbers }
        let sortedNumbers;

        for (let i = 1; i < 46; i++) {
            lotteryNumberContainer.push(i);
        }

        for (let i = 0; i < 7; i++) {
            const randomNumber = Math.ceil(Math.random() * lotteryNumberContainer.length-1);

            pickedNumberContainer[i] = lotteryNumberContainer.splice(randomNumber, 1)[0];
        }

        Object.keys(numbers)
            .forEach((order,index) => {
                numbers[order] = pickedNumberContainer[index];
            })        

        sortedNumbers = pickedNumberContainer.sort((a, b) => a - b);

        this.setState({ numbers: numbers, sortedNumbers: sortedNumbers });
    }

    render() {

        return (
            <StyledDiv>
                <LotteryNumbers 
                    numbers={this.state.numbers} 
                    sortedNumbers={this.state.sortedNumbers}
                    clicked={this.pickRandomNumberHandler} />
            </StyledDiv>
        );
    }
}
export default LotteryControl;
