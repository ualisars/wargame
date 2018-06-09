import {assert, expect} from 'chai';
import {getRandomValueInRange} from '../../../src/utils/random';

describe('randomUtils test', () => {

    describe('getRandomValueInRange test', () => {

        it('random value should be in range from 2 to 5', () => {

            let randomValue1: number = getRandomValueInRange(2, 5);
            let randomValue2: number = getRandomValueInRange(2, 5);
            let randomValue3: number = getRandomValueInRange(2, 5);
            let randomValue4: number = getRandomValueInRange(2, 5);
            let randomValue5: number = getRandomValueInRange(2, 5);

            expect(randomValue1).to.be.least(2);
            expect(randomValue2).to.be.least(2);
            expect(randomValue3).to.be.least(2);
            expect(randomValue4).to.be.least(2);
            expect(randomValue5).to.be.least(2);

            expect(randomValue1).to.be.at.most(5);
            expect(randomValue2).to.be.at.most(5);
            expect(randomValue3).to.be.at.most(5);
            expect(randomValue4).to.be.at.most(5);
            expect(randomValue5).to.be.at.most(5);

        });

        it('random value should be in range from 0.1 to 0.6', () => {

            let randomValue1: number = getRandomValueInRange(0.1, 0.6);
            let randomValue2: number = getRandomValueInRange(0.1, 0.6);
            let randomValue3: number = getRandomValueInRange(0.1, 0.6);
            let randomValue4: number = getRandomValueInRange(0.1, 0.6);
            let randomValue5: number = getRandomValueInRange(0.1, 0.6);

            expect(randomValue1).to.be.least(0.1);
            expect(randomValue2).to.be.least(0.1);
            expect(randomValue3).to.be.least(0.1);
            expect(randomValue4).to.be.least(0.1);
            expect(randomValue5).to.be.least(0.1);

            expect(randomValue1).to.be.at.most(0.6);
            expect(randomValue2).to.be.at.most(0.6);
            expect(randomValue3).to.be.at.most(0.6);
            expect(randomValue4).to.be.at.most(0.6);
            expect(randomValue5).to.be.at.most(0.6);

        });

        it('random value should be in range from 120 to 400', () => {

            let randomValue1: number = getRandomValueInRange(120, 400);
            let randomValue2: number = getRandomValueInRange(120, 400);
            let randomValue3: number = getRandomValueInRange(120, 400);
            let randomValue4: number = getRandomValueInRange(120, 400);
            let randomValue5: number = getRandomValueInRange(120, 400);

            expect(randomValue1).to.be.least(120);
            expect(randomValue2).to.be.least(120);
            expect(randomValue3).to.be.least(120);
            expect(randomValue4).to.be.least(120);
            expect(randomValue5).to.be.least(120);

            expect(randomValue1).to.be.at.most(400);
            expect(randomValue2).to.be.at.most(400);
            expect(randomValue3).to.be.at.most(400);
            expect(randomValue4).to.be.at.most(400);
            expect(randomValue5).to.be.at.most(400);

        });

        it('random value should be in range from -30 to 10', () => {

            let randomValue1: number = getRandomValueInRange(-30, 10);
            let randomValue2: number = getRandomValueInRange(-30, 10);
            let randomValue3: number = getRandomValueInRange(-30, 10);
            let randomValue4: number = getRandomValueInRange(-30, 10);
            let randomValue5: number = getRandomValueInRange(-30, 10);

            expect(randomValue1).to.be.least(-30);
            expect(randomValue2).to.be.least(-30);
            expect(randomValue3).to.be.least(-30);
            expect(randomValue4).to.be.least(-30);
            expect(randomValue5).to.be.least(-30);

            expect(randomValue1).to.be.at.most(10);
            expect(randomValue2).to.be.at.most(10);
            expect(randomValue3).to.be.at.most(10);
            expect(randomValue4).to.be.at.most(10);
            expect(randomValue5).to.be.at.most(10);

        });

        it('random value should be in range from 0.44 to 0.87', () => {

            let randomValue1: number = getRandomValueInRange(0.44, 0.87);
            let randomValue2: number = getRandomValueInRange(0.44, 0.87);
            let randomValue3: number = getRandomValueInRange(0.44, 0.87);
            let randomValue4: number = getRandomValueInRange(0.44, 0.87);
            let randomValue5: number = getRandomValueInRange(0.44, 0.87);

            expect(randomValue1).to.be.least(0.44);
            expect(randomValue2).to.be.least(0.44);
            expect(randomValue3).to.be.least(0.44);
            expect(randomValue4).to.be.least(0.44);
            expect(randomValue5).to.be.least(0.44);

            expect(randomValue1).to.be.at.most(0.87);
            expect(randomValue2).to.be.at.most(0.87);
            expect(randomValue3).to.be.at.most(0.87);
            expect(randomValue4).to.be.at.most(0.87);
            expect(randomValue5).to.be.at.most(0.87);

        });

        it('should not throw error', () => {

            let randomValue1: number = getRandomValueInRange(0, 100);
            let randomValue2: number = getRandomValueInRange(0, 1);
            let randomValue3: number = getRandomValueInRange(50, 51);
            let randomValue4: number = getRandomValueInRange(99, 100);

        });

    });
});