import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';
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
    noLightInfantry
} from '../../../../store/AI/translators/typesTranslators/lightInfantryTranslatorStore/lightInfantryTranslator';
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
    setNoLightInfantry,
    resetLightInfantryTranslatorStore
} from '../../../../store/AI/translators/typesTranslators/lightInfantryTranslatorStore';

export const translateLightInfantry = () => {

    resetLightInfantryTranslatorStore();

    // get ratio for each unit type
    const {computerLightInfantryRatio} = calculateComputerTypesRatio();

    const {playerLightInfantryRatio} = calculatePlayerTypesRatio();

    const {lightInfantryRatio} = calculateTypesRatio();

    console.log('computerLightInfantryRatio', computerLightInfantryRatio);
    console.log('playerLightInfantryRatio', playerLightInfantryRatio);
    console.log('lightInfantryRatio', lightInfantryRatio);

    // computerLightInfantryRatio check
    if(computerLightInfantryRatio >= 0.7 && computerLightInfantryRatio <= 1) {
        setComputerHasTooManyLightInfantry();
    }

    else if(computerLightInfantryRatio >= 0.4 && computerLightInfantryRatio < 0.7) {
        setComputerHasManyLightInfantry();
    }

    else if(computerLightInfantryRatio > 0 && computerLightInfantryRatio < 0.4) {
        setComputerHasFewLightInfantry();
    }

    else if(computerLightInfantryRatio === 0) {
        setComputerHasNoLightInfantry();
    }

    else {
        throw new Error('invalid computerLightInfantryRatio value');
    }

    // playerLightInfantryRatio check
    if(playerLightInfantryRatio >= 0.7 && playerLightInfantryRatio <= 1) {
        setPlayerHasTooManyLightInfantry();
    }

    else if(playerLightInfantryRatio >= 0.4 && playerLightInfantryRatio < 0.7) {
        setPlayerHasManyLightInfantry();
    }

    else if(playerLightInfantryRatio > 0 && playerLightInfantryRatio < 0.4) {
        setPlayerHasFewLightInfantry();
    }

    else if(playerLightInfantryRatio === 0) {
        setPlayerHasNoLightInfantry();
    }
    
    else {
        throw new Error('invalid playerLightInfantryRatio value');
    }

    // infantryRatio check
    if(computerLightInfantryRatio === 0 && playerLightInfantryRatio === 0) {
        setNoLightInfantry();
    }

    if(lightInfantryRatio > 0.5 && lightInfantryRatio <= 1) {
        setComputerHasMoreLightInfantry();
    }

    else if(lightInfantryRatio === 0.5) {
        setEqualNumberOfLightInfantry();
    }

    else if(lightInfantryRatio >= 0 && lightInfantryRatio < 0.5 && playerLightInfantryRatio !== 0) {
        setPlayerHasMoreLightInfantry();
    }
}