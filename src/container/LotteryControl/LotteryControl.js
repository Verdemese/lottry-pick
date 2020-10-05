import React, { Component } from 'react';
import styled from 'styled-components';

import LotteryButton from '../../component/LotteryButton/LotteryButton';
import LotteryNumbers from '../../component/LotteryNumbers/LotteryNumbers';


const StyledDiv = styled.div`
    height: 200px;
    width: 500px;
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

    pickRandomNumber = () => {
        let randomNumber = Math.ceil(Math.random() * 45);
        return randomNumber;
    } 

    sortNumbers = (object) => {
        const sortedNumbers = Object.values({...object})
            .sort((a, b) => a - b);

        return sortedNumbers;
    }

    removeRepititiveNumber = (numbers) => {
        //'numbers' are array
        const comparison = [...numbers];
        const temp = [...numbers];

        numbers.forEach((number, index) => {
            comparison.forEach((comparisonNumber, comparisonIndex) => {
                if (index !== comparisonIndex && number === comparisonNumber) {
                    temp.splice(index, 1, this.pickRandomNumber());
                    if (temp.findIndex((el, index) => el === )){}
                }
            });
        });

        console.log(temp);
    }

    changeNumbers = () => {
        const numbers = { ...this.state.numbers };

        let pickedNumber = 0;

        const transformedNumbers = Object.keys(numbers)
            .forEach(number => {

                const randomNumber = this.pickRandomNumber();

                if (pickedNumber === randomNumber) {
                    //new number as if there is repititive number
                    const NotRepititionNumber = this.pickRandomNumber()

                    pickedNumber = NotRepititionNumber;
                    
                    numbers[number] = NotRepititionNumber;
                } else {
                    pickedNumber = randomNumber;
                    
                    numbers[number] = randomNumber;
                }
                numbers[number] = randomNumber;
            });
        
        // debugger;
        const sortedNumbers = this.sortNumbers(numbers);

        this.setState({ numbers: numbers, sortedNumbers: sortedNumbers });
    }


    render() {

        // console.log(this.state);

        this.removeRepititiveNumber(this.state.sortedNumbers);

        return (
            <StyledDiv>
                <LotteryNumbers 
                    numbers={this.state.numbers} 
                    sortedNumbers={this.state.sortedNumbers}
                    clicked={this.changeNumbers} />
            </StyledDiv>
        );
    }
}
export default LotteryControl;
