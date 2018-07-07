import {assert} from 'chai';
import {
    speedSuperiority,
    speedAdvantage,
    equalSpeed,
    speedDisadvantage,
    speedCompleteDisadvantage
} from '../../../../src/store/AI/translators/speedTranslator/speedTranslatorStore';

import {
    setSpeedSuperiority,
    setSpeedAdvantage,
    setEqualSpeed,
    setSpeedDisadvantage,
    setSpeedCompleteDisadvantage
} from '../../../../src/store/AI/translators/speedTranslator';

describe('translators store test', () => {

    describe('speedTranslatorStore test', () => {

        it('speedSuperiority should be true', (done) => {

            setSpeedSuperiority();

            assert.equal(speedSuperiority, true);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, false);

            done();

        });

        it('speedAdvantage should be true', (done) => {

            setSpeedAdvantage();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, true);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, false);
            
            done();

        });

        it('equalSpeed should be true', (done) => {

            setEqualSpeed();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, true);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, false);
            
            done();

        });

        it('speedDisadvantage should be true', (done) => {

            setSpeedDisadvantage();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, true);
            assert.equal(speedCompleteDisadvantage, false);
            
            done();

        });

        it('speedCompleteDisadvantage should be true', (done) => {

            setSpeedCompleteDisadvantage();

            assert.equal(speedSuperiority, false);
            assert.equal(speedAdvantage, false);
            assert.equal(equalSpeed, false);
            assert.equal(speedDisadvantage, false);
            assert.equal(speedCompleteDisadvantage, true);
            
            done();

        });
    });
});