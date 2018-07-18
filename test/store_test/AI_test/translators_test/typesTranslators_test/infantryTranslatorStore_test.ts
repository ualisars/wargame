import {assert} from 'chai';

import {
    computerHasTooManyInfantry,
    playerHasTooManyInfantry,
    computerHasManyInfantry,
    playerHasManyInfantry,
    computerHasFewInfantry,
    playerHasFewInfantry,
    computerHasNoInfantry,
    playerHasNoInfantry,
    computerHasMoreInfantry,
    playerHasMoreInfantry,
    equalNumberOfInfantry,
    computerHasLotsOfInfantry,
    playerHasLotsOfInfantry,
    computerHasInfantry,
    playerHasInfantry,
    noInfantry,
} from '../../../../../src/store/AI/translators/typesTranslators/infantryTranslatorStore/infantryTranslator';
import {
    setComputerHasTooManyInfantry,
    setPlayerHasTooManyInfantry,
    setComputerHasManyInfantry,
    setPlayerHasManyInfantry,
    setComputerHasFewInfantry,
    setPlayerHasFewInfantry,
    setComputerHasNoInfantry,
    setPlayerHasNoInfantry,
    setComputerHasMoreInfantry,
    setPlayerHasMoreInfantry,
    setEqualNumberOfInfantry,
    setComputerHasLotsOfInfantry,
    setPlayerHasLotsOfInfantry,
    setComputerHasInfantry,
    setPlayerHasInfantry,
    setNoInfantry,
    resetInfantryTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/infantryTranslatorStore';

describe('translators store test', () => {

    describe('infantry types translator test', () => {

        it('computerHasManyInfantry should be true', (done) => {
            
            setComputerHasManyInfantry();

            assert.equal(computerHasTooManyInfantry, false);
            assert.equal(computerHasManyInfantry, true);
            assert.equal(computerHasFewInfantry, false);
            assert.equal(computerHasLotsOfInfantry, true);
            assert.equal(computerHasInfantry, true);
            assert.equal(computerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('computerHasFewInfantry should be true', (done) => {
            
            setComputerHasFewInfantry();

            assert.equal(computerHasTooManyInfantry, false);
            assert.equal(computerHasManyInfantry, false);
            assert.equal(computerHasFewInfantry, true);
            assert.equal(computerHasLotsOfInfantry, false);
            assert.equal(computerHasInfantry, true);
            assert.equal(computerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('playerHasFewInfantry should be true', (done) => {
            
            setPlayerHasFewInfantry();

            assert.equal(playerHasTooManyInfantry, false);
            assert.equal(playerHasManyInfantry, false);
            assert.equal(playerHasFewInfantry, true);
            assert.equal(playerHasNoInfantry, false);
            assert.equal(playerHasLotsOfInfantry, false);
            assert.equal(playerHasInfantry, true);
            assert.equal(noInfantry, false);

            done();
        });

        it('playerHasTooManyInfantry should be true', (done) => {
            
            setPlayerHasTooManyInfantry();

            assert.equal(playerHasTooManyInfantry, true);
            assert.equal(playerHasManyInfantry, false);
            assert.equal(playerHasFewInfantry, false);
            assert.equal(playerHasLotsOfInfantry, true);
            assert.equal(playerHasInfantry, true);
            assert.equal(playerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();

        });

        it('computerHasLotsOfInfantry should be true', (done) => {
            
            setComputerHasLotsOfInfantry();

            assert.equal(computerHasLotsOfInfantry, true);
            assert.equal(computerHasInfantry, true);
            assert.equal(computerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('playerHasLotsOfInfantry should be true', (done) => {
            
            setPlayerHasLotsOfInfantry();

            assert.equal(playerHasLotsOfInfantry, true);
            assert.equal(playerHasInfantry, true);
            assert.equal(playerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('playerHasManyInfantry should be true', (done) => {
            
            setPlayerHasManyInfantry();

            assert.equal(playerHasTooManyInfantry, false);
            assert.equal(playerHasManyInfantry, true);
            assert.equal(playerHasFewInfantry, false);
            assert.equal(playerHasNoInfantry, false);
            assert.equal(playerHasLotsOfInfantry, true);
            assert.equal(playerHasInfantry, true);
            assert.equal(noInfantry, false);

            done();
        });

        it('equalNumberOfInfantry should be true', (done) => {

            setEqualNumberOfInfantry();

            assert.equal(computerHasMoreInfantry, false);
            assert.equal(playerHasMoreInfantry, false);
            assert.equal(equalNumberOfInfantry, true);
            assert.equal(noInfantry, false);

            done(); 
        });

        it('playerHasInfantry should be true', (done) => {
            
            setPlayerHasInfantry();

            assert.equal(playerHasLotsOfInfantry, false);
            assert.equal(playerHasInfantry, true);
            assert.equal(playerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('noInfantry should be true', (done) => {

            setNoInfantry();

            assert.equal(computerHasTooManyInfantry, false);
            assert.equal(computerHasManyInfantry, false);
            assert.equal(computerHasFewInfantry, false);
            assert.equal(computerHasNoInfantry, true);

            assert.equal(playerHasTooManyInfantry, false);
            assert.equal(playerHasManyInfantry, false);
            assert.equal(playerHasFewInfantry, false);
            assert.equal(playerHasNoInfantry, true);

            assert.equal(computerHasMoreInfantry, false);
            assert.equal(playerHasMoreInfantry, false);
            assert.equal(equalNumberOfInfantry, true);
            assert.equal(noInfantry, true);

            assert.equal(computerHasLotsOfInfantry, false);
            assert.equal(computerHasInfantry, false);
            assert.equal(playerHasLotsOfInfantry, false);
            assert.equal(playerHasInfantry, false);

            done();
        });

        it('computerHasTooManyInfantry should be true', (done) => {
            
            setComputerHasTooManyInfantry();

            assert.equal(computerHasTooManyInfantry, true);
            assert.equal(computerHasManyInfantry, false);
            assert.equal(computerHasFewInfantry, false);
            assert.equal(computerHasLotsOfInfantry, true);
            assert.equal(computerHasInfantry, true);
            assert.equal(computerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();

        });

        it('computerHasNoInfantry should be true', (done) => {
            
            setComputerHasNoInfantry();

            assert.equal(computerHasTooManyInfantry, false);
            assert.equal(computerHasManyInfantry, false);
            assert.equal(computerHasFewInfantry, false);
            assert.equal(computerHasNoInfantry, true);
            assert.equal(computerHasLotsOfInfantry, false);
            assert.equal(computerHasInfantry, false);

            done();
        });

        it('computerHasMoreInfantry should be true', (done) => {

            setComputerHasMoreInfantry();

            assert.equal(computerHasMoreInfantry, true);
            assert.equal(playerHasMoreInfantry, false);
            assert.equal(equalNumberOfInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('playerHasNoInfantry should be true', (done) => {
            
            setPlayerHasNoInfantry();

            assert.equal(playerHasTooManyInfantry, false);
            assert.equal(playerHasManyInfantry, false);
            assert.equal(playerHasFewInfantry, false);
            assert.equal(playerHasNoInfantry, true);
            assert.equal(playerHasLotsOfInfantry, false);
            assert.equal(playerHasInfantry, false);

            done();
        });

        it('computerHasInfantry should be true', (done) => {
            
            setComputerHasInfantry();

            assert.equal(computerHasLotsOfInfantry, false);
            assert.equal(computerHasInfantry, true);
            assert.equal(computerHasNoInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('playerHasMoreInfantry should be true', (done) => {

            setPlayerHasMoreInfantry();

            assert.equal(computerHasMoreInfantry, false);
            assert.equal(playerHasMoreInfantry, true);
            assert.equal(equalNumberOfInfantry, false);
            assert.equal(noInfantry, false);

            done();
        });

        it('all properties should be false', (done) => {

            resetInfantryTranslatorStore();

            assert.equal(computerHasTooManyInfantry, false);
            assert.equal(computerHasManyInfantry, false);
            assert.equal(computerHasFewInfantry, false);
            assert.equal(computerHasNoInfantry, false);

            assert.equal(playerHasTooManyInfantry, false);
            assert.equal(playerHasManyInfantry, false);
            assert.equal(playerHasFewInfantry, false);
            assert.equal(playerHasNoInfantry, false);

            assert.equal(computerHasMoreInfantry, false);
            assert.equal(playerHasMoreInfantry, false);
            assert.equal(equalNumberOfInfantry, false);
            assert.equal(noInfantry, false);

            assert.equal(computerHasInfantry, false);
            assert.equal(computerHasNoInfantry, false);
            assert.equal(playerHasLotsOfInfantry, false);
            assert.equal(playerHasInfantry, false);
            done();
        });
    });
});