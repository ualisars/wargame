import {assert} from 'chai';
import {
    setComputerHasTooManySkirmishers,
    setPlayerHasTooManySkirmishers,
    setComputerHasManySkirmishers,
    setPlayerHasManySkirmishers,
    setComputerHasMoreSkirmishers,
    setPlayerHasMoreSkirmishers,
    setSkirmisherMinority,
    setNoSkirmishers
} from '../../../../../src/store/AI/translators/typesTranslators/shirmishersTranslatorStore';

import {
    computerHasTooManySkirmishers,
    playerHasTooManySkirmishers,
    computerHasManySkirmishers,
    playerHasManySkirmishers,
    computerHasMoreSkirmishers,
    playerHasMoreSkirmishers,
    skirmisherMinority,
    noSkirmishers
} from '../../../../../src/store/AI/translators/typesTranslators/shirmishersTranslatorStore/skirmisherTranslatorStore';


describe('translators store test', () => {

    describe('skirmisher translator store test', () => {

        it('computerHasTooManySkirmishers should be true', (done) => {

            setComputerHasTooManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, true);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(skirmisherMinority, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasTooManySkirmishers should be true', (done) => {

            setPlayerHasTooManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, true);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(skirmisherMinority, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasManySkirmishers should be true', (done) => {

            setComputerHasManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, true);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(skirmisherMinority, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('playerHasManySkirmishers should be true', (done) => {

            setPlayerHasManySkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, true);
            assert.equal(skirmisherMinority, false);
            assert.equal(noSkirmishers, false);

            done();

        });

        it('computerHasMoreSkirmishers should be true', (done) => {

            setComputerHasMoreSkirmishers();

            assert.equal(computerHasMoreSkirmishers, true);
            assert.equal(playerHasMoreSkirmishers, false);

            done();

        });

        it('playerHasMoreSkirmishers should be true', (done) => {

            setPlayerHasMoreSkirmishers();

            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, true);

            done();

        });

        it('skirmisherMinority should be true', (done) => {

            setSkirmisherMinority();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(skirmisherMinority, true);
            assert.equal(noSkirmishers, false);

            done();

        });


        it('noSkirmishers should be true', (done) => {

            setNoSkirmishers();

            assert.equal(computerHasTooManySkirmishers, false);
            assert.equal(playerHasTooManySkirmishers, false);
            assert.equal(computerHasManySkirmishers, false);
            assert.equal(playerHasManySkirmishers, false);
            assert.equal(computerHasMoreSkirmishers, false);
            assert.equal(playerHasMoreSkirmishers, false);
            assert.equal(skirmisherMinority, false);
            assert.equal(noSkirmishers, true);

            done();

        });

    });
}); 