import {getRandomValueInRange} from './getRandomValueInRange';

/*
    return a random number within the range
    based on some probability
    e.g range from 40 to 60
    with 80% probability in interval 50 to 55
    @args
    min: number,
    max: number,
    probabilities: {
        interval: [intervalMin:number, intervalMax:number],
        probability: probability: number
    }
*/

export const getRandomValueInRangeWithProbability = (
    min: number,
    max: number,
    probabilities: any 
): number => {

    let randomValue: number = Math.random();
    let intervalMin: number = probabilities.interval[0];
    let intervalMax: number = probabilities.interval[1];
    let value: number;

    let probability: number = (probabilities.probability * 0.01);

    if(randomValue >= 0 && randomValue <= probability) {
        value = getRandomValueInRange(intervalMin, intervalMax);
    } else {
        value = getRandomValueInRange(min, max);
    }

    return value;
}