import {assert} from 'chai';

import {
   computerHasTooManyLightInfantry,
   playerHasTooManyLightInfantry,
   computerHasManyLightInfantry,
   playerHasManyLightInfantry,
   computerHasFewLightInfantry,
   playerHasFewLightInfantry,
   computerHasNoLightInfantry,
   playerHasNoLightInfantry,
   computerHasMoreLightInfantry,
   playerHasMoreLightInfantry,
   equalNumberOfLightInfantry,
   noLightInfantry
} from '../../../../../src/store/AI/translators/typesTranslators/lightInfantryTranslatorStore/lightInfantryTranslator';
import {
    setComputerHasTooManyLightInfantry,
    setPlayerHasTooManyLightInfantry,
    setComputerHasManyLightInfantry,
    setPlayerHasManyLightInfantry,
    setComputerHasFewLightInfantry,
    setPlayerHasFewLightInfantry,
    setComputerHasNoLightInfantry,
    setPlayerHasNoLightInfantry,
    setComputerHasMoreLightInfantry,
    setPlayerHasMoreLightInfantry,
    setEqualNumberOfLightInfantry,
    setNoLightInfantry,
    resetLightInfantryTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/lightInfantryTranslatorStore';

describe('translators store test', () => {

    describe('lightInfantry types translator test', () => {

        it('computerHasTooManyLightInfantry should be true', (done) => {
            
            setComputerHasTooManyLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, true);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('computerHasTooManyLightInfantry should be true', (done) => {
            
            setPlayerHasTooManyLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, true);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('computerHasManyLightInfantry should be true', (done) => {
            
            setComputerHasManyLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, true);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('playerHasManyLightInfantry should be true', (done) => {
            
            setPlayerHasManyLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, true);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('computerHasFewLightInfantry should be true', (done) => {
            
            setComputerHasFewLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, true);
            assert.equal(computerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('playerHasManyLightInfantry should be true', (done) => {
            
            setPlayerHasFewLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, true);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('computerHasNoLightInfantry should be true', (done) => {
            
            setComputerHasNoLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, true);

            done();

        });

        it('playerHasNoLightInfantry should be true', (done) => {
            
            setPlayerHasNoLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, true);

            done();

        });

        it('computerHasMoreLightInfantry should be true', (done) => {

            setComputerHasMoreLightInfantry();

            assert.equal(computerHasMoreLightInfantry, true);
            assert.equal(playerHasMoreLightInfantry, false);
            assert.equal(equalNumberOfLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('playerHasMoreLightInfantry should be true', (done) => {

            setPlayerHasMoreLightInfantry();

            assert.equal(computerHasMoreLightInfantry, false);
            assert.equal(playerHasMoreLightInfantry, true);
            assert.equal(equalNumberOfLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();
            
        });

        it('equalNumberOfLightInfantry should be true', (done) => {

            setEqualNumberOfLightInfantry();

            assert.equal(computerHasMoreLightInfantry, false);
            assert.equal(playerHasMoreLightInfantry, false);
            assert.equal(equalNumberOfLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();
            
        });

        it('noInfantry should be true', (done) => {

            setNoLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, false);

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, false);

            assert.equal(computerHasMoreLightInfantry, false);
            assert.equal(playerHasMoreLightInfantry, false);
            assert.equal(equalNumberOfLightInfantry, false);
            assert.equal(noLightInfantry, true);

            done();
            
        });

        it('all properties should be false', (done) => {

            resetLightInfantryTranslatorStore();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, false);

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, false);

            assert.equal(computerHasMoreLightInfantry, false);
            assert.equal(playerHasMoreLightInfantry, false);
            assert.equal(equalNumberOfLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();

        });

    });
});