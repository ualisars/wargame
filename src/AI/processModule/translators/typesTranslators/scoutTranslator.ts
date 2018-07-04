import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';
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
} from '../../../../store/AI/translators/typesTranslators/scoutTranslatorStore/scoutTranslator';
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
} from '../../../../store/AI/translators/typesTranslators/scoutTranslatorStore';

export const translateScouts = () => {

    resetScoutsTranslatorStore();

    // get ratio for each unit type
    const {computerScoutsRatio} = calculateComputerTypesRatio();

    const {playerScoutsRatio} = calculatePlayerTypesRatio();

    const {scoutsRatio} = calculateTypesRatio();

    if(computerScoutsRatio >= 0.6 && computerScoutsRatio <= 1) {
        setComputerHasTooManyScouts();
    }

    else if(computerScoutsRatio >= 0.3 && computerScoutsRatio < 0.6) {
        setComputerHasManyScouts();
    }

    else if(computerScoutsRatio > 0 && computerScoutsRatio < 0.3) {
        setComputerHasFewScouts();
    }

    else if(computerScoutsRatio === 0) {
        setComputerHasNoScouts();
    }

    else {
        throw new Error('Invalid computerScoutsRatio value');
    }

    if(playerScoutsRatio >= 0.6 && playerScoutsRatio <= 1) {
        setPlayerHasTooManyScouts();
    }

    else if(playerScoutsRatio >= 0.3 && playerScoutsRatio < 0.6) {
        setPlayerHasManyScouts();
    }

    else if(playerScoutsRatio > 0 && playerScoutsRatio < 0.3) {
        setPlayerHasFewScouts();
    }

    else if(playerScoutsRatio === 0) {
        setPlayerHasNoScouts();
    } 

    else {
        throw new Error('Invalid playerScoutsRatio value');
    }

    if(scoutsRatio > 0.5 && scoutsRatio <= 1) {
        setComputerHasMoreScouts();
    }

    else if(scoutsRatio === 0.5) {
        setEqualNumberOfScouts();
    }

    else if(scoutsRatio >= 0 && scoutsRatio < 0.5 && playerScoutsRatio !== 0) {
        setPlayerHasMoreScouts();
    }

    if(computerScoutsRatio === 0 && playerScoutsRatio === 0) {
        setNoScouts();
    }
}