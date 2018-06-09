import {expect} from 'chai';
import {getRandomValueInRangeWithProbability} from '../../../src/utils/random';

describe('randomUtils test', function() {
  
    describe('getRandomValueInRangeWithProbability test', function() {
            
        it('value in range of 40 to 60 should be most frequent', () => {

            let randomValues: number[] = [];

            let randomValue1 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue2 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue3 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue4 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue5 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue6 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue7 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue8 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue9 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue10 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            let randomValue11 = getRandomValueInRangeWithProbability(0, 100, {
                interval: [40, 60],
                probability: 70
            });

            randomValues.push(randomValue1);
            randomValues.push(randomValue2);
            randomValues.push(randomValue3);
            randomValues.push(randomValue4);
            randomValues.push(randomValue5);
            randomValues.push(randomValue6);
            randomValues.push(randomValue7);
            randomValues.push(randomValue8);
            randomValues.push(randomValue9);
            randomValues.push(randomValue10);
            randomValues.push(randomValue11);

            let count: number = 0;
            for(let randomValue of randomValues) {
                if(randomValue >= 40 && randomValue <= 60) {
                    count++;
                }
            }

            expect(count).to.be.least(5);

        });
    });

});