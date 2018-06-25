import {assert} from 'chai';

import {
   computerHasTooManyScouts,
   playerHasTooManyScouts,
   computerHasManyScouts,
   playerHasManyScouts,
   computerHasFewScouts,
   playerHasFewScouts,
   computerHasNoScouts,
   playerHasNoScouts,
   computerHasMoreScouts,
   playerHasMoreScouts,
   equalNumberOfScouts,
   noScouts
} from '../../../../../src/store/AI/translators/typesTranslators/scoutTranslatorStore/scoutTranslator';
import {
    setComputerHasTooManyScouts,
    setPlayerHasTooManyScouts,
    setComputerHasManyScouts,
    setPlayerHasManyScouts,
    setComputerHasFewScouts,
    setPlayerHasFewScouts,
    setComputerHasNoScouts,
    setPlayerHasNoScouts,
    setComputerHasMoreScouts,
    setPlayerHasMoreScouts,
    setEqualNumberOfScouts,
    setNoScouts,
    resetScoutsTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/scoutTranslatorStore';

describe('translators store test', () => {

    describe('scout types translator test', () => {

        it('computerHasTooManyScouts should be true', (done) => {
            
            setComputerHasTooManyScouts();

            assert.equal(computerHasTooManyScouts, true);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('computerHasTooManyScouts should be true', (done) => {
            
            setPlayerHasTooManyScouts();

            assert.equal(playerHasTooManyScouts, true);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('computerHasManyScouts should be true', (done) => {
            
            setComputerHasManyScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, true);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('playerHasManyScouts should be true', (done) => {
            
            setPlayerHasManyScouts();

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, true);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('computerHasFewScouts should be true', (done) => {
            
            setComputerHasFewScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, true);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('playerHasManyScouts should be true', (done) => {
            
            setPlayerHasFewScouts();

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, true);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('computerHasNoScouts should be true', (done) => {
            
            setComputerHasNoScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasNoScouts, true);

            done();

        });

        it('playerHasNoScouts should be true', (done) => {
            
            setPlayerHasNoScouts();

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasNoScouts, true);

            done();

        });

        it('computerHasMoreScouts should be true', (done) => {

            setComputerHasMoreScouts();

            assert.equal(computerHasMoreScouts, true);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, false);
            assert.equal(noScouts, false);

            done();

        });

        it('playerHasMoreScouts should be true', (done) => {

            setPlayerHasMoreScouts();

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, true);
            assert.equal(equalNumberOfScouts, false);
            assert.equal(noScouts, false);

            done();
            
        });

        it('equalNumberOfScouts should be true', (done) => {

            setEqualNumberOfScouts();

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, true);
            assert.equal(noScouts, false);

            done();
            
        });

        it('noScouts should be true', (done) => {

            setNoScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasNoScouts, false);

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasNoScouts, false);

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, false);
            assert.equal(noScouts, true);

            done();
            
        });

        it('all properties should be false', (done) => {

            resetScoutsTranslatorStore();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasNoScouts, false);

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasNoScouts, false);

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, false);
            assert.equal(noScouts, false);

            done();

        });

    });
});
