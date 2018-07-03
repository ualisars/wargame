import {assert} from 'chai';
import {
    computerHasTooManyCavalry,
    playerHasTooManyCavalry,
    computerHasManyCavalry,
    playerHasManyCavalry,
    computerHasFewCavalry,
    playerHasFewCavalry,
    computerHasNoCavalry,
    playerHasNoCavalry,
    computerHasMoreCavalry,
    playerHasMoreCavalry,
    equalNumberOfCavalry,
    noCavalry
} from '../../../../../src/store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator';
import {
    setComputerHasTooManyCavalry,
    setPlayerHasTooManyCavalry,
    setComputerHasManyCavalry,
    setPlayerHasManyCavalry,
    setComputerHasFewCavalry,
    setPlayerHasFewCavalry,
    setComputerHasNoCavalry,
    setPlayerHasNoCavalry,
    setComputerHasMoreCavalry,
    setPlayerHasMoreCavalry,
    setEqualNumberOfCavalry,
    setNoCavalry,
    resetCavalryTranslatorStore 
} from '../../../../../src/store/AI/translators/typesTranslators/cavalryTranslatorStore';

describe('translators store test', () => {

    describe('cavalry types translator test', () => {

        it('computerHasTooManyCavalry should be true', (done) => {
            
            setComputerHasTooManyCavalry();

            assert.equal(computerHasTooManyCavalry, true);
            assert.equal(computerHasManyCavalry, false);
            assert.equal(computerHasFewCavalry, false);
            assert.equal(computerHasNoCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('playerHasTooManyCavalry should be true', (done) => {
            
            setPlayerHasTooManyCavalry();
            
            assert.equal(playerHasTooManyCavalry, true);
            assert.equal(playerHasManyCavalry, false);
            assert.equal(playerHasFewCavalry, false);
            assert.equal(playerHasNoCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('computerHasManyCavalry should be true', (done) => {
            
            setComputerHasManyCavalry();

            assert.equal(computerHasTooManyCavalry, false);
            assert.equal(computerHasManyCavalry, true);
            assert.equal(computerHasFewCavalry, false);
            assert.equal(computerHasNoCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('playerHasManyCavalry should be true', (done) => {
            
            setPlayerHasManyCavalry();
            
            assert.equal(playerHasTooManyCavalry, false);
            assert.equal(playerHasManyCavalry, true);
            assert.equal(playerHasFewCavalry, false);
            assert.equal(playerHasNoCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('computerHasFewCavalry should be true', (done) => {
            
            setComputerHasFewCavalry();

            assert.equal(computerHasTooManyCavalry, false);
            assert.equal(computerHasManyCavalry, false);
            assert.equal(computerHasFewCavalry, true);
            assert.equal(computerHasNoCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('playerHasFewCavalry should be true', (done) => {
            
            setPlayerHasFewCavalry();
            
            assert.equal(playerHasTooManyCavalry, false);
            assert.equal(playerHasManyCavalry, false);
            assert.equal(playerHasFewCavalry, true);
            assert.equal(playerHasNoCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('computerHasNoCavalry should be true', (done) => {
            
            setComputerHasNoCavalry();

            assert.equal(computerHasTooManyCavalry, false);
            assert.equal(computerHasManyCavalry, false);
            assert.equal(computerHasFewCavalry, false);
            assert.equal(computerHasNoCavalry, true);
            assert.equal(noCavalry, false);

            done();

        });

        it('playerHasNoCavalry should be true', (done) => {
            
            setPlayerHasNoCavalry();
            
            assert.equal(playerHasTooManyCavalry, false);
            assert.equal(playerHasManyCavalry, false);
            assert.equal(playerHasFewCavalry, false);
            assert.equal(playerHasNoCavalry, true);
            assert.equal(noCavalry, false);

            done();

        });

        it('computerHasMoreCavalry should be true', (done) => {

            setComputerHasMoreCavalry();

            assert.equal(computerHasMoreCavalry, true);
            assert.equal(playerHasMoreCavalry, false);
            assert.equal(equalNumberOfCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('playerHasMoreCavalry should be true', (done) => {

            setPlayerHasMoreCavalry();

            assert.equal(computerHasMoreCavalry, false);
            assert.equal(playerHasMoreCavalry, true);
            assert.equal(equalNumberOfCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('equalNumberOfCavalry should be true', (done) => {

            setEqualNumberOfCavalry();

            assert.equal(computerHasMoreCavalry, false);
            assert.equal(playerHasMoreCavalry, false);
            assert.equal(equalNumberOfCavalry, true);

            done();

        });

        it('all properties should be false', (done) => {

            resetCavalryTranslatorStore();

            assert.equal(computerHasTooManyCavalry, false);
            assert.equal(computerHasManyCavalry, false);
            assert.equal(computerHasFewCavalry, false);
            assert.equal(computerHasNoCavalry, false);

            assert.equal(playerHasTooManyCavalry, false);
            assert.equal(playerHasManyCavalry, false);
            assert.equal(playerHasFewCavalry, false);
            assert.equal(playerHasNoCavalry, false);

            assert.equal(computerHasMoreCavalry, false);
            assert.equal(playerHasMoreCavalry, false);
            assert.equal(equalNumberOfCavalry, false);
            assert.equal(noCavalry, false);

            done();

        });

        it('noCavalry should be true', (done) => {

            setNoCavalry();

            assert.equal(computerHasTooManyCavalry, false);
            assert.equal(computerHasManyCavalry, false);
            assert.equal(computerHasFewCavalry, false);
            assert.equal(computerHasNoCavalry, true);

            assert.equal(playerHasTooManyCavalry, false);
            assert.equal(playerHasManyCavalry, false);
            assert.equal(playerHasFewCavalry, false);
            assert.equal(playerHasNoCavalry, true);

            assert.equal(computerHasMoreCavalry, false);
            assert.equal(playerHasMoreCavalry, false);
            assert.equal(equalNumberOfCavalry, true);
            assert.equal(noCavalry, true);

            done();

        });
    });
});
