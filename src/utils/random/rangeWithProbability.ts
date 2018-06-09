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

    // check for errors

    if(min >= max) {
        throw new Error('min cannot be more or equal to max');
    }

    if(!probabilities.interval) {
        throw new Error('probability interval is required');
    }

    if(probabilities.interval.length != 2) {
        throw new Error('invalid probability interval syntax');
    }

    if(probabilities.interval[0] < min || probabilities.interval[1] < min) {
        throw new Error('one of probability interval is less than min');
    }

    if(probabilities.interval[0] > max || probabilities.interval[1] > max) {
        throw new Error('one of probability interval is more than max');
    }

    if(probabilities.interval[0] >= probabilities.interval[1]) {
        throw new Error('invalid probability interval');
    }

    if(!probabilities.probability) {
        throw new Error('probabilities argument required');
    }

    if(probabilities.probability < 0 || probabilities.probability > 100) {
        throw new Error('invalid probability value');
    }

    if(probabilities.probability > 0 && probabilities.probability < 1) {
        throw new Error('invalid probability value');
    }

    // end of checking for errors

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