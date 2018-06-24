import {assert} from 'chai';

import {
   computerHasTooManyHeavyInfantry,
   playerHasTooManyHeavyInfantry,
   computerHasManyHeavyInfantry,
   playerHasManyHeavyInfantry,
   computerHasFewHeavyInfantry,
   playerHasFewHeavyInfantry,
   computerHasNoHeavyInfantry,
   playerHasNoHeavyInfantry,
   computerHasMoreHeavyInfantry,
   playerHasMoreHeavyInfantry,
   equalNumberOfHeavyInfantry,
   noHeavyInfantry
} from '../../../../../src/store/AI/translators/typesTranslators/heavyInfantryTranslatorStore/heavyInfantryTranslator';
import {
    setComputerHasTooManyHeavyInfantry,
    setPlayerHasTooManyHeavyInfantry,
    setComputerHasManyHeavyInfantry,
    setPlayerHasManyHeavyInfantry,
    setComputerHasFewHeavyInfantry,
    setPlayerHasFewHeavyInfantry,
    setComputerHasNoHeavyInfantry,
    setPlayerHasNoHeavyInfantry,
    setComputerHasMoreHeavyInfantry,
    setPlayerHasMoreHeavyInfantry,
    setEqualNumberOfHeavyInfantry,
    setNoHeavyInfantry,
    resetHeavyInfantryTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/heavyInfantryTranslatorStore';

describe('translators store test', () => {

    describe('heavyInfantry types translator test', () => {

        it('computerHasTooManyHeavyInfantry should be true', (done) => {
            
            setComputerHasTooManyHeavyInfantry();

            assert.equal(computerHasTooManyHeavyInfantry, true);
            assert.equal(computerHasManyHeavyInfantry, false);
            assert.equal(computerHasFewHeavyInfantry, false);
            assert.equal(computerHasNoHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('computerHasTooManyHeavyInfantry should be true', (done) => {
            
            setPlayerHasTooManyHeavyInfantry();

            assert.equal(playerHasTooManyHeavyInfantry, true);
            assert.equal(playerHasManyHeavyInfantry, false);
            assert.equal(playerHasFewHeavyInfantry, false);
            assert.equal(playerHasNoHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('computerHasManyHeavyInfantry should be true', (done) => {
            
            setComputerHasManyHeavyInfantry();

            assert.equal(computerHasTooManyHeavyInfantry, false);
            assert.equal(computerHasManyHeavyInfantry, true);
            assert.equal(computerHasFewHeavyInfantry, false);
            assert.equal(computerHasNoHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('playerHasManyHeavyInfantry should be true', (done) => {
            
            setPlayerHasManyHeavyInfantry();

            assert.equal(playerHasTooManyHeavyInfantry, false);
            assert.equal(playerHasManyHeavyInfantry, true);
            assert.equal(playerHasFewHeavyInfantry, false);
            assert.equal(playerHasNoHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('computerHasFewHeavyInfantry should be true', (done) => {
            
            setComputerHasFewHeavyInfantry();

            assert.equal(computerHasTooManyHeavyInfantry, false);
            assert.equal(computerHasManyHeavyInfantry, false);
            assert.equal(computerHasFewHeavyInfantry, true);
            assert.equal(computerHasNoHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('playerHasManyHeavyInfantry should be true', (done) => {
            
            setPlayerHasFewHeavyInfantry();

            assert.equal(playerHasTooManyHeavyInfantry, false);
            assert.equal(playerHasManyHeavyInfantry, false);
            assert.equal(playerHasFewHeavyInfantry, true);
            assert.equal(playerHasNoHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('computerHasNoHeavyInfantry should be true', (done) => {
            
            setComputerHasNoHeavyInfantry();

            assert.equal(computerHasTooManyHeavyInfantry, false);
            assert.equal(computerHasManyHeavyInfantry, false);
            assert.equal(computerHasFewHeavyInfantry, false);
            assert.equal(computerHasNoHeavyInfantry, true);

            done();

        });

        it('playerHasNoHeavyInfantry should be true', (done) => {
            
            setPlayerHasNoHeavyInfantry();

            assert.equal(playerHasTooManyHeavyInfantry, false);
            assert.equal(playerHasManyHeavyInfantry, false);
            assert.equal(playerHasFewHeavyInfantry, false);
            assert.equal(playerHasNoHeavyInfantry, true);

            done();

        });

        it('computerHasMoreHeavyInfantry should be true', (done) => {

            setComputerHasMoreHeavyInfantry();

            assert.equal(computerHasMoreHeavyInfantry, true);
            assert.equal(playerHasMoreHeavyInfantry, false);
            assert.equal(equalNumberOfHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

        it('playerHasMoreHeavyInfantry should be true', (done) => {

            setPlayerHasMoreHeavyInfantry();

            assert.equal(computerHasMoreHeavyInfantry, false);
            assert.equal(playerHasMoreHeavyInfantry, true);
            assert.equal(equalNumberOfHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();
            
        });

        it('equalNumberOfHeavyInfantry should be true', (done) => {

            setEqualNumberOfHeavyInfantry();

            assert.equal(computerHasMoreHeavyInfantry, false);
            assert.equal(playerHasMoreHeavyInfantry, false);
            assert.equal(equalNumberOfHeavyInfantry, true);
            assert.equal(noHeavyInfantry, false);

            done();
            
        });

        it('noInfantry should be true', (done) => {

            setNoHeavyInfantry();

            assert.equal(computerHasTooManyHeavyInfantry, false);
            assert.equal(computerHasManyHeavyInfantry, false);
            assert.equal(computerHasFewHeavyInfantry, false);
            assert.equal(computerHasNoHeavyInfantry, false);

            assert.equal(playerHasTooManyHeavyInfantry, false);
            assert.equal(playerHasManyHeavyInfantry, false);
            assert.equal(playerHasFewHeavyInfantry, false);
            assert.equal(playerHasNoHeavyInfantry, false);

            assert.equal(computerHasMoreHeavyInfantry, false);
            assert.equal(playerHasMoreHeavyInfantry, false);
            assert.equal(equalNumberOfHeavyInfantry, false);
            assert.equal(noHeavyInfantry, true);

            done();
            
        });

        it('all properties should be false', (done) => {

            resetHeavyInfantryTranslatorStore();

            assert.equal(computerHasTooManyHeavyInfantry, false);
            assert.equal(computerHasManyHeavyInfantry, false);
            assert.equal(computerHasFewHeavyInfantry, false);
            assert.equal(computerHasNoHeavyInfantry, false);

            assert.equal(playerHasTooManyHeavyInfantry, false);
            assert.equal(playerHasManyHeavyInfantry, false);
            assert.equal(playerHasFewHeavyInfantry, false);
            assert.equal(playerHasNoHeavyInfantry, false);

            assert.equal(computerHasMoreHeavyInfantry, false);
            assert.equal(playerHasMoreHeavyInfantry, false);
            assert.equal(equalNumberOfHeavyInfantry, false);
            assert.equal(noHeavyInfantry, false);

            done();

        });

    });
});