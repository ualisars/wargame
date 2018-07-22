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
    computerHasLotsOfSpearmen,
    playerHasLotsOfSpearmen,
    computerHasSpearmen,
    playerHasSpearmen,
    noSpearmen,
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
    setComputerHasLotsOfSpearmen,
    setPlayerHasLotsOfSpearmen,
    setComputerHasSpearmen,
    setPlayerHasSpearmen,
    setNoSpearmen,
    resetSpearmenTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/spearmenTranslatorStore';

describe('translators store test', () => {

    describe('spearmen types translator test', () => {

        it('computerHasTooManySpearmen should be true', () => {
            
            setComputerHasTooManySpearmen();

            assert.equal(computerHasTooManySpearmen, true);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasLotsOfSpearmen, true);
            assert.equal(computerHasSpearmen, true);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('playerHasTooManySpearmen should be true', () => {
            
            setPlayerHasTooManySpearmen();

            assert.equal(playerHasTooManySpearmen, true);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasLotsOfSpearmen, true);
            assert.equal(playerHasSpearmen, true);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('computerHasManySpearmen should be true', () => {
            
            setComputerHasManySpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, true);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasLotsOfSpearmen, true);
            assert.equal(computerHasSpearmen, true);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('playerHasManySpearmen should be true', () => {
            
            setPlayerHasManySpearmen();

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, true);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasLotsOfSpearmen, true);
            assert.equal(playerHasSpearmen, true);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('computerHasFewSpearmen should be true', () => {
            
            setComputerHasFewSpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, true);
            assert.equal(computerHasLotsOfSpearmen, false);
            assert.equal(computerHasSpearmen, true);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('playerHasFewSpearmen should be true', () => {
            
            setPlayerHasFewSpearmen();

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, true);
            assert.equal(playerHasLotsOfSpearmen, false);
            assert.equal(playerHasSpearmen, true);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('computerHasNoSpearmen should be true', () => {
            
            setComputerHasNoSpearmen();

            assert.equal(computerHasTooManySpearmen, false);
            assert.equal(computerHasManySpearmen, false);
            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasLotsOfSpearmen, false);
            assert.equal(computerHasSpearmen, false);
            assert.equal(computerHasNoSpearmen, true);
        });

        it('playerHasNoSpearmen should be true', () => {
            
            setPlayerHasNoSpearmen();

            assert.equal(playerHasTooManySpearmen, false);
            assert.equal(playerHasManySpearmen, false);
            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasLotsOfSpearmen, false);
            assert.equal(playerHasSpearmen, false);
            assert.equal(playerHasNoSpearmen, true);
        });

        it('computerHasLotsOfSpearmen should be true', () => {

            setComputerHasLotsOfSpearmen();

            assert.equal(computerHasFewSpearmen, false);
            assert.equal(computerHasLotsOfSpearmen, true);
            assert.equal(computerHasSpearmen, true);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('playerHasLotsOfSpearmen should be true', () => {

            setPlayerHasLotsOfSpearmen();

            assert.equal(playerHasFewSpearmen, false);
            assert.equal(playerHasLotsOfSpearmen, true);
            assert.equal(playerHasSpearmen, true);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('computerHasSpearmen should be true', () => {

            setComputerHasSpearmen();

            assert.equal(computerHasLotsOfSpearmen, false);
            assert.equal(computerHasSpearmen, true);
            assert.equal(computerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('playerHasSpearmen should be true', () => {

            setPlayerHasSpearmen();

            assert.equal(playerHasLotsOfSpearmen, false);
            assert.equal(playerHasSpearmen, true);
            assert.equal(playerHasNoSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('computerHasMoreSpearmen should be true', () => {

            setComputerHasMoreSpearmen();

            assert.equal(computerHasMoreSpearmen, true);
            assert.equal(playerHasMoreSpearmen, false);
            assert.equal(equalNumberOfSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('playerHasMoreSpearmen should be true', () => {

            setPlayerHasMoreSpearmen();

            assert.equal(computerHasMoreSpearmen, false);
            assert.equal(playerHasMoreSpearmen, true);
            assert.equal(equalNumberOfSpearmen, false);
            assert.equal(noSpearmen, false);
        });

        it('equalNumberOfSpearmen should be true', () => {

            setEqualNumberOfSpearmen();

            assert.equal(computerHasMoreSpearmen, false);
            assert.equal(playerHasMoreSpearmen, false);
            assert.equal(equalNumberOfSpearmen, true);
            assert.equal(noSpearmen, false);
        });

        it('noSpearmen should be true', () => {

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

            assert.equal(computerHasLotsOfSpearmen, false);
            assert.equal(computerHasSpearmen, false);
            assert.equal(playerHasLotsOfSpearmen, false);
            assert.equal(playerHasSpearmen, false);
        });

        it('all properties should be false', () => {

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

            assert.equal(computerHasLotsOfSpearmen, false);
            assert.equal(computerHasSpearmen, false);
            assert.equal(playerHasLotsOfSpearmen, false);
            assert.equal(playerHasSpearmen, false);
        });
    });
});