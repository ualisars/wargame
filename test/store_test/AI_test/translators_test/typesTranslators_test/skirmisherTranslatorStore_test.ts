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
    setNoSkirmishers,
    setEqualNumberOfSkirmishers,
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
    noSkirmishers
} from '../../../../../src/store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore';


describe('translators store test', () => {

    describe('skirmisher translator store test', () => {

        it('computerHasTooManySkirmishers should be true', (done) => {

            setComputerHasTooManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, true);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasTooManySkirmishers should be true', (done) => {

            setPlayerHasTooManySkirmishers();

            assert.equal(playerHasTooManySkirmishers, true);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasManySkirmishers should be true', (done) => {

            setComputerHasManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, true);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('playerHasManySkirmishers should be true', (done) => {

            setPlayerHasManySkirmishers();

            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, true);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasFewSkirmishers should be true', (done) => {

            setComputerHasFewSkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, true);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('playerHasManySkirmishers should be true', (done) => {

            setPlayerHasFewSkirmishers();

            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(playerHasFewSkirmishers, true);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasNoSkirmishers should be true', (done) => {

            setComputerHasNoSkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(computerHasFewSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, true);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('playerHasManySkirmishers should be true', (done) => {

            setPlayerHasNoSkirmishers();

            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(playerHasFewSkirmishers, false);
            assert.equal(playerHasNoSkirmishers, true);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasMoreSkirmishers should be true', (done) => {

            setComputerHasMoreSkirmishers();

            assert.equal(computerHasMoreSkirmishers, true);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(equalNumberOfSkirmishers, false);
            assert.equal(computerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('playerHasMoreSkirmishers should be true', (done) => {

            setPlayerHasMoreSkirmishers();

            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, true);
            assert.equal(equalNumberOfSkirmishers, false);
            assert.equal(playerHasNoSkirmishers, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('equalNumberOfSkirmishers should be true', (done) => {

            setEqualNumberOfSkirmishers();

            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(equalNumberOfSkirmishers, true);

            done();

        });

        it('all values should be false', (done) => {

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

            done();

        });


        it('noSkirmishers should be true', (done) => {

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

            done();

        });

    });
}); 