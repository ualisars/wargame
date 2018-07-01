import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';
import {
    computerHasTooManyHeavyInfantry,
    playerHasTooManyHeavyInfantry,
    computerHasManyHeavyInfantry,
    playerHasManyHeavyInfantry,
    computerHasFewHeavyInfantry,
    playerHasFewHeavyInfantry,
    computerHasNoHeavyInfantry,
    playerHasNoHeavyInfantry,
    computerHasMoreHeavyInfantry,
    playerHasMoreHeavyInfantry,
    equalNumberOfHeavyInfantry,
    noHeavyInfantry,
} from '../../../../store/AI/translators/typesTranslators/heavyInfantryTranslatorStore/heavyInfantryTranslator';
import {
    setComputerHasTooManyHeavyInfantry,
    setPlayerHasTooManyHeavyInfantry,
    setComputerHasManyHeavyInfantry,
    setPlayerHasManyHeavyInfantry,
    setComputerHasFewHeavyInfantry,
    setPlayerHasFewHeavyInfantry,
    setComputerHasNoHeavyInfantry,
    setPlayerHasNoHeavyInfantry,
    setComputerHasMoreHeavyInfantry,
    setPlayerHasMoreHeavyInfantry,
    setEqualNumberOfHeavyInfantry,
    setNoHeavyInfantry,
    resetHeavyInfantryTranslatorStore
} from '../../../../store/AI/translators/typesTranslators/heavyInfantryTranslatorStore';

export const translateHeavyInfantry = () => {

    resetHeavyInfantryTranslatorStore();

    // get ratio for each unit type
    const {computerHeavyInfantryRatio} = calculateComputerTypesRatio();

    const {playerHeavyInfantryRatio} = calculatePlayerTypesRatio();

    const {heavyInfantryRatio} = calculateTypesRatio();

    if(computerHeavyInfantryRatio >= 0.6 && computerHeavyInfantryRatio <= 1) {
        setComputerHasTooManyHeavyInfantry();
    }

    else if(computerHeavyInfantryRatio >= 0.3 && computerHeavyInfantryRatio <= 0.6) {
        setComputerHasManyHeavyInfantry();
    }

    else if(computerHeavyInfantryRatio > 0 && computerHeavyInfantryRatio < 0.3) {
        setComputerHasFewHeavyInfantry();
    }

    else if(computerHeavyInfantryRatio === 0) {
        setComputerHasNoHeavyInfantry();
    }

    else {
        throw new Error('invalid computerHeavyInfantryRatio value');
    }

    if(playerHeavyInfantryRatio >= 0.6 && playerHeavyInfantryRatio <= 1) {
        setPlayerHasTooManyHeavyInfantry();
    }

    else if(playerHeavyInfantryRatio >= 0.3 && playerHeavyInfantryRatio <= 0.6) {
        setPlayerHasManyHeavyInfantry();
    }

    else if(playerHeavyInfantryRatio > 0 && playerHeavyInfantryRatio < 0.3) {
        setPlayerHasFewHeavyInfantry();
    }

    else if(playerHeavyInfantryRatio === 0) {
        setPlayerHasNoHeavyInfantry();
    }

    else {
        throw new Error('invalid playerHeavyInfantryRatio value');
    }

    if(heavyInfantryRatio > 0.5 && heavyInfantryRatio <= 1) {
        setComputerHasMoreHeavyInfantry();
    }

    else if(heavyInfantryRatio === 0.5) {
        setEqualNumberOfHeavyInfantry();
    }

    else if(
        heavyInfantryRatio >= 0 
        && heavyInfantryRatio < 0.5 
        && playerHeavyInfantryRatio !== 0
    ) {
        setPlayerHasMoreHeavyInfantry();
    }

    if(computerHeavyInfantryRatio === 0 && playerHeavyInfantryRatio === 0) {
        setNoHeavyInfantry();
    }
}