import {assert} from 'chai';
import {
    setComputerHasTooManySkirmishers,
    setPlayerHasTooManySkirmishers,
    setComputerHasManySkirmishers,
    setPlayerHasManySkirmishers,
    setComputerHasFewSkirmishers,
    setPlayerHasFewSkirmishers,
    setComputerHasNoSkirmishers,
    setPlayerHasNoSkirmishers,
    setComputerHasMoreSkirmishers,
    setPlayerHasMoreSkirmishers,
    setEqualNumberOfSkirmishers,
    setComputerHasLotsOfSkirmishers,
    setPlayerHasLotsOfSkirmishers,
    setComputerHasSkirmishers,
    setPlayerHasSkirmishers,
    setNoSkirmishers,
    resetSkirmisherTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/skirmisherTranslatorStore';

import {
    computerHasTooManySkirmishers,
    playerHasTooManySkirmishers,
    computerHasManySkirmishers,
    playerHasManySkirmishers,
    computerHasFewSkirmishers,
    playerHasFewSkirmishers,
    computerHasNoSkirmishers,
    playerHasNoSkirmishers,
    computerHasMoreSkirmishers,
    playerHasMoreSkirmishers,
    equalNumberOfSkirmishers,
    computerHasLotsOfSkirmishers,
    playerHasLotsOfSkirmishers,
    computerHasSkirmishers,
    playerHasSkirmishers,
    noSkirmishers,
} from '../../../../../src/store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore';


describe('translators store test', () => {

    describe('skirmisher translator store test', () => {

        it('computerHasManySkirmishers should be true', () => {

            setComputerHasManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, true);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasLotsOfSkirmishers, true);
            assert.equal(computerHasSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('computerHasFewSkirmishers should be true', () => {

            setComputerHasFewSkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, true);
            assert.equal(computerHasLotsOfSkirmishers, false);
            assert.equal(computerHasSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('computerHasTooManySkirmishers should be true', () => {

            setComputerHasTooManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, true);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasLotsOfSkirmishers, true);
            assert.equal(computerHasSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasManySkirmishers should be true', () => {

            setPlayerHasManySkirmishers();

            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, true);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasLotsOfSkirmishers, true);
            assert.equal(playerHasSkirmishers, true);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('computerHasLotsOfSkirmishers should be true', () => {

            setComputerHasLotsOfSkirmishers();

            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasLotsOfSkirmishers, true);
            assert.equal(computerHasSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasFewSkirmishers should be true', () => {

            setPlayerHasFewSkirmishers();

            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(playerHasFewSkirmishers, true);
            assert.equal(playerHasLotsOfSkirmishers, false);
            assert.equal(playerHasSkirmishers, true);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasLotsOfSkirmishers should be true', () => {

            setPlayerHasLotsOfSkirmishers();

            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasLotsOfSkirmishers, true);
            assert.equal(playerHasSkirmishers, true);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('computerHasSkirmishers should be true', () => {

            setComputerHasSkirmishers();

            assert.equal(computerHasLotsOfSkirmishers, false);
            assert.equal(computerHasSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasSkirmishers should be true', () => {

            setPlayerHasSkirmishers();

            assert.equal(playerHasLotsOfSkirmishers, false);
            assert.equal(playerHasSkirmishers, true);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('computerHasNoSkirmishers should be true', () => {

            setComputerHasNoSkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasLotsOfSkirmishers, false);
            assert.equal(computerHasSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, true);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasNoSkirmishers should be true', () => {

            setPlayerHasNoSkirmishers();

            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasLotsOfSkirmishers, false);
            assert.equal(playerHasSkirmishers, false);
            assert.equal(playerHasNoSkirmishers, true);
            assert.equal(noSkirmishers, false);
        });

        it('computerHasMoreSkirmishers should be true', () => {

            setComputerHasMoreSkirmishers();

            assert.equal(computerHasMoreSkirmishers, true);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(equalNumberOfSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasTooManySkirmishers should be true', () => {

            setPlayerHasTooManySkirmishers();

            assert.equal(playerHasTooManySkirmishers, true);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasLotsOfSkirmishers, true);
            assert.equal(playerHasSkirmishers, true);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('playerHasMoreSkirmishers should be true', () => {

            setPlayerHasMoreSkirmishers();

            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, true);
            assert.equal(equalNumberOfSkirmishers, false);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);
        });

        it('equalNumberOfSkirmishers should be true', () => {

            setEqualNumberOfSkirmishers();

            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(equalNumberOfSkirmishers, true);
        });

        it('all values should be false', () => {

            resetSkirmisherTranslatorStore();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(equalNumberOfSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(noSkirmishers, false);
            assert.equal(playerHasLotsOfSkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(computerHasLotsOfSkirmishers, false);
            assert.equal(computerHasSkirmishers, false);
        });

        it('noSkirmishers should be true', () => {

            setNoSkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, true);
            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(equalNumberOfSkirmishers, true);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(noSkirmishers, true);

            assert.equal(playerHasLotsOfSkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(computerHasLotsOfSkirmishers, false);
            assert.equal(computerHasSkirmishers, false);
        });
    });
}); 