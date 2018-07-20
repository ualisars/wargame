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
    computerHasLotsOfLightInfantry,
    playerHasLotsOfLightInfantry,
    computerHasLightInfantry,
    playerHasLightInfantry,
    noLightInfantry,
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
    setComputerHasLotsOfLightInfantry,
    setPlayerHasLotsOfLightInfantry,
    setComputerHasLightInfantry,
    setPlayerHasLightInfantry,
    setNoLightInfantry,
    resetLightInfantryTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/lightInfantryTranslatorStore';

describe('translators store test', () => {

    describe('lightInfantry types translator test', () => {

        it('playerHasLotsOfLightInfantry should be true', (done) => {

            setPlayerHasLotsOfLightInfantry();

            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, true);
            assert.equal(playerHasLightInfantry, true);
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
            assert.equal(computerHasLotsOfLightInfantry, true);
            assert.equal(computerHasLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('playerHasManyLightInfantry should be true', (done) => {
            
            setPlayerHasManyLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, true);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, true);
            assert.equal(playerHasLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();

        });

        it('computerHasTooManyLightInfantry should be true', (done) => {
            
            setComputerHasTooManyLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, true);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, false);
            assert.equal(computerHasLotsOfLightInfantry, true);
            assert.equal(computerHasLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();
        });

        it('computerHasLightInfantry should be true', (done) => {

            setComputerHasLightInfantry();

            assert.equal(computerHasLotsOfLightInfantry, false);
            assert.equal(computerHasLightInfantry, true);
            assert.equal(computerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();
        });

        it('computerHasFewLightInfantry should be true', (done) => {
            
            setComputerHasFewLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, true);
            assert.equal(computerHasNoLightInfantry, false);
            assert.equal(computerHasLotsOfLightInfantry, false);
            assert.equal(computerHasLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();
        });

        it('playerHasFewLightInfantry should be true', (done) => {
            
            setPlayerHasFewLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, true);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, false);
            assert.equal(playerHasLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();
        });

        it('computerHasNoLightInfantry should be true', (done) => {
            
            setComputerHasNoLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasLotsOfLightInfantry, false);
            assert.equal(computerHasLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, true);

            done();
        });

        it('playerHasNoLightInfantry should be true', (done) => {
            
            setPlayerHasNoLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, false);
            assert.equal(playerHasLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, true);

            done();
        });

        

        it('computerHasLotsOfLightInfantry should be true', (done) => {

            setComputerHasLotsOfLightInfantry();

            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasLotsOfLightInfantry, true);
            assert.equal(computerHasLightInfantry, true);
            assert.equal(computerHasNoLightInfantry, false);
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

        it('playerHasLightInfantry should be true', (done) => {

            setPlayerHasLightInfantry();

            assert.equal(playerHasLotsOfLightInfantry, false);
            assert.equal(playerHasLightInfantry, true);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(noLightInfantry, false);

            done();
        });

        it('noInfantry should be true', (done) => {

            setNoLightInfantry();

            assert.equal(computerHasTooManyLightInfantry, false);
            assert.equal(computerHasManyLightInfantry, false);
            assert.equal(computerHasFewLightInfantry, false);
            assert.equal(computerHasNoLightInfantry, true);

            assert.equal(playerHasTooManyLightInfantry, false);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, true);

            assert.equal(computerHasMoreLightInfantry, false);
            assert.equal(playerHasMoreLightInfantry, false);
            assert.equal(equalNumberOfLightInfantry, true);
            assert.equal(noLightInfantry, true);

            assert.equal(computerHasLotsOfLightInfantry, false);
            assert.equal(computerHasLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, false);
            assert.equal(playerHasLightInfantry, false);

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

            assert.equal(computerHasLotsOfLightInfantry, false);
            assert.equal(computerHasLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, false);
            assert.equal(playerHasLightInfantry, false);

            done();
        });

        it('computerHasTooManyLightInfantry should be true', (done) => {
            
            setPlayerHasTooManyLightInfantry();

            assert.equal(playerHasTooManyLightInfantry, true);
            assert.equal(playerHasManyLightInfantry, false);
            assert.equal(playerHasFewLightInfantry, false);
            assert.equal(playerHasNoLightInfantry, false);
            assert.equal(playerHasLotsOfLightInfantry, true);
            assert.equal(playerHasLightInfantry, true);
            assert.equal(noLightInfantry, false);

            done();
        });
    });
});