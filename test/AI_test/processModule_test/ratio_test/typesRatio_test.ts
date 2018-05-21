import {assert} from 'chai';
import {
    calculatePercentRatio
} from '../../../../src/AI/processModule/ratio/typesRatio';

describe('AI processModule ratioTest', () => {

    describe('calculatePercentRatio test', () => {

        it('percent ratio should be equal to 0.42', () => {

            let ratio:number = calculatePercentRatio(5, 7);
            assert.equal(ratio, 0.42);

        });

        it('ratio should be equal to 0.75', () => {

            let ratio:number = calculatePercentRatio(3, 1);
            assert.equal(ratio, 0.75);

        });

        it('ratio should be equal to 0', () => {

            let ratio:number = calculatePercentRatio(0, 2);
            assert.equal(ratio, 0);

        });

        it('ratio should be equal to 1', () => {

            let ratio:number = calculatePercentRatio(4, 0);
            assert.equal(ratio, 1);

        });

        it('ratio should be equal to 0.5', () => {

            let ratio:number = calculatePercentRatio(2, 2);
            assert.equal(ratio, 0.5);

        });

    });
});