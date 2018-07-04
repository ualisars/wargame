import {assert} from 'chai';

import {
   computerHasTooManySpearmen,
   playerHasTooManySpearmen,
   computerHasManySpearmen,
   playerHasManySpearmen,
   computerHasFewSpearmen,
   playerHasFewSpearmen,
   computerHasNoSpearmen,
   playerHasNoSpearmen,
   computerHasMoreSpearmen,
   playerHasMoreSpearmen,
   equalNumberOfSpearmen,
   noSpearmen
} from '../../../../../src/store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';
import {
    setComputerHasTooManySpearmen,
    setPlayerHasTooManySpearmen,
    setComputerHasManySpearmen,
    setPlayerHasManySpearmen,
    setComputerHasFewSpearmen,
    setPlayerHasFewSpearmen,
    setComputerHasNoSpearmen,
    setPlayerHasNoSpearmen,
    setComputerHasMoreSpearmen,
    setPlayerHasMoreSpearmen,
    setEqualNumberOfSpearmen,
    setNoSpearmen,
    resetSpearmenTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/spearmenTranslatorStore';

describe('translators store test', () => {

    describe('spearmen types translator test', () => {

        it('computerHasTooManySpearmen should be true', (done) => {
            
            setComputerHasTooManySpearmen();

            assert.equal(computerHasTooManySpearmen, true);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('computerHasTooManySpearmen should be true', (done) => {
            
            setPlayerHasTooManySpearmen();

            assert.equal(playerHasTooManySpearmen, true);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('computerHasManySpearmen should be true', (done) => {
            
            setComputerHasManySpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, true);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('playerHasManySpearmen should be true', (done) => {
            
            setPlayerHasManySpearmen();

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, true);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('computerHasFewSpearmen should be true', (done) => {
            
            setComputerHasFewSpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, true);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('playerHasManySpearmen should be true', (done) => {
            
            setPlayerHasFewSpearmen();

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, true);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('computerHasNoSpearmen should be true', (done) => {
            
            setComputerHasNoSpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasNoSpearmen, true);

            done();

        });

        it('playerHasNoSpearmen should be true', (done) => {
            
            setPlayerHasNoSpearmen();

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasNoSpearmen, true);

            done();

        });

        it('computerHasMoreSpearmen should be true', (done) => {

            setComputerHasMoreSpearmen();

            assert.equal(computerHasMoreSpearmen, true);
            assert.equal(playerHasMoreSpearmen, false);
            assert.equal(equalNumberOfSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

        it('playerHasMoreSpearmen should be true', (done) => {

            setPlayerHasMoreSpearmen();

            assert.equal(computerHasMoreSpearmen, false);
            assert.equal(playerHasMoreSpearmen, true);
            assert.equal(equalNumberOfSpearmen, false);
            assert.equal(noSpearmen, false);

            done();
            
        });

        it('equalNumberOfSpearmen should be true', (done) => {

            setEqualNumberOfSpearmen();

            assert.equal(computerHasMoreSpearmen, false);
            assert.equal(playerHasMoreSpearmen, false);
            assert.equal(equalNumberOfSpearmen, true);
            assert.equal(noSpearmen, false);

            done();
            
        });

        it('noSpearmen should be true', (done) => {

            setNoSpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasNoSpearmen, true);

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasNoSpearmen, true);

            assert.equal(computerHasMoreSpearmen, false);
            assert.equal(playerHasMoreSpearmen, false);
            assert.equal(equalNumberOfSpearmen, true);
            assert.equal(noSpearmen, true);

            done();
            
        });

        it('all properties should be false', (done) => {

            resetSpearmenTranslatorStore();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasNoSpearmen, false);

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasNoSpearmen, false);

            assert.equal(computerHasMoreSpearmen, false);
            assert.equal(playerHasMoreSpearmen, false);
            assert.equal(equalNumberOfSpearmen, false);
            assert.equal(noSpearmen, false);

            done();

        });

    });
});