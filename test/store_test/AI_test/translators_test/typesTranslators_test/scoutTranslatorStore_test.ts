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
    computerHasLotsOfScouts,
    playerHasLotsOfScouts,
    computerHasScouts,
    playerHasScouts,
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
    setComputerHasLotsOfScouts,
    setPlayerHasLotsOfScouts,
    setComputerHasScouts,
    setPlayerHasScouts,
    setNoScouts,
    resetScoutsTranslatorStore
} from '../../../../../src/store/AI/translators/typesTranslators/scoutTranslatorStore';
import { assessOffensivePoints } from '../../../../../src/AI/strategyModule/decisionUnit/strategy/offensivePoints/assessOffensivePoints';

describe('translators store test', () => {

    describe('scout types translator test', () => {

        it('computerHasTooManyScouts should be true', () => {
            
            setComputerHasTooManyScouts();

            assert.equal(computerHasTooManyScouts, true);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasLotsOfScouts, true);
            assert.equal(computerHasScouts, true);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);
        });

        it('playerHasTooManyScouts should be true', () => {
            
            setPlayerHasTooManyScouts();

            assert.equal(playerHasTooManyScouts, true);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasLotsOfScouts, true);
            assert.equal(playerHasScouts, true);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);
        });

        it('computerHasManyScouts should be true', () => {
            
            setComputerHasManyScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, true);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasLotsOfScouts, true);
            assert.equal(computerHasScouts, true);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);
        });

        it('playerHasManyScouts should be true', () => {
            
            setPlayerHasManyScouts();

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, true);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasLotsOfScouts, true);
            assert.equal(playerHasScouts, true);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);
        });

        it('computerHasFewScouts should be true', () => {
            
            setComputerHasFewScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, true);
            assert.equal(computerHasLotsOfScouts, false);
            assert.equal(computerHasScouts, true);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);
        });

        it('playerHasManyScouts should be true', () => {
            
            setPlayerHasFewScouts();

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, true);
            assert.equal(playerHasLotsOfScouts, false);
            assert.equal(playerHasScouts, true);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);
        });

        it('computerHasNoScouts should be true', () => {
            
            setComputerHasNoScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasLotsOfScouts, false);
            assert.equal(computerHasScouts, false);
            assert.equal(computerHasNoScouts, true);
        });

        it('playerHasNoScouts should be true', () => {
            
            setPlayerHasNoScouts();

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasLotsOfScouts, false);
            assert.equal(playerHasScouts, false);
            assert.equal(playerHasNoScouts, true);
        });

        it('computerHasLotsOfScouts should be true', () => {

            setComputerHasLotsOfScouts();

            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasLotsOfScouts, true);
            assert.equal(computerHasScouts, true);
            assert.equal(computerHasNoScouts, false);  
            assert.equal(noScouts, false);                
        });

        it('playerHasLotsOfScouts should be true', () => {

            setPlayerHasLotsOfScouts();

            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasLotsOfScouts, true);
            assert.equal(playerHasScouts, true);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);      
        });

        it('computerHasScouts should be true', () => {

            setComputerHasScouts();

            assert.equal(computerHasLotsOfScouts, false);
            assert.equal(computerHasScouts, true);
            assert.equal(computerHasNoScouts, false);
            assert.equal(noScouts, false);            
        });

        it('playerHasScouts should be true', () => {

            setPlayerHasScouts();

            assert.equal(playerHasLotsOfScouts, false);
            assert.equal(playerHasScouts, true);
            assert.equal(playerHasNoScouts, false);
            assert.equal(noScouts, false);      
        });

        it('computerHasMoreScouts should be true', () => {

            setComputerHasMoreScouts();

            assert.equal(computerHasMoreScouts, true);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, false);
            assert.equal(noScouts, false);
        });

        it('playerHasMoreScouts should be true', () => {

            setPlayerHasMoreScouts();

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, true);
            assert.equal(equalNumberOfScouts, false);
            assert.equal(noScouts, false); 
        });

        it('equalNumberOfScouts should be true', () => {

            setEqualNumberOfScouts();

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, true);
            assert.equal(noScouts, false);            
        });

        it('noScouts should be true', () => {

            setNoScouts();

            assert.equal(computerHasTooManyScouts, false);
            assert.equal(computerHasManyScouts, false);
            assert.equal(computerHasFewScouts, false);
            assert.equal(computerHasNoScouts, true);

            assert.equal(playerHasTooManyScouts, false);
            assert.equal(playerHasManyScouts, false);
            assert.equal(playerHasFewScouts, false);
            assert.equal(playerHasNoScouts, true);

            assert.equal(computerHasMoreScouts, false);
            assert.equal(playerHasMoreScouts, false);
            assert.equal(equalNumberOfScouts, true);
            assert.equal(noScouts, true);

            assert.equal(computerHasLotsOfScouts, false);
            assert.equal(computerHasScouts, false);
            assert.equal(playerHasLotsOfScouts, false);
            assert.equal(playerHasScouts, false);    
        });

        it('all properties should be false', () => {

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

            assert.equal(computerHasLotsOfScouts, false);
            assert.equal(computerHasScouts, false);
            assert.equal(playerHasLotsOfScouts, false);
            assert.equal(playerHasScouts, false);
        });
    });
});
