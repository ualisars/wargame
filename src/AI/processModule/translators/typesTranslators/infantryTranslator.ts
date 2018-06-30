import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';
import {
    computerHasTooManyInfantry,
    playerHasTooManyInfantry,
    computerHasManyInfantry,
    playerHasManyInfantry,
    computerHasFewInfantry,
    playerHasFewInfantry,
    computerHasNoInfantry,
    playerHasNoInfantry,
    computerHasMoreInfantry,
    playerHasMoreInfantry,
    equalNumberOfInfantry,
    noInfantry
} from '../../../../store/AI/translators/typesTranslators/infantryTranslatorStore/infantryTranslator';
import {
    setComputerHasTooManyInfantry,
    setPlayerHasTooManyInfantry,
    setComputerHasManyInfantry,
    setPlayerHasManyInfantry,
    setComputerHasFewInfantry,
    setPlayerHasFewInfantry,
    setComputerHasNoInfantry,
    setPlayerHasNoInfantry,
    setComputerHasMoreInfantry,
    setPlayerHasMoreInfantry,
    setEqualNumberOfInfantry,
    setNoInfantry,
    resetInfantryTranslatorStore
} from '../../../../store/AI/translators/typesTranslators/infantryTranslatorStore';

export const translateInfantry = () => {

    resetInfantryTranslatorStore();

    // get ratio for each unit type
    const {computerInfantryRatio} = calculateComputerTypesRatio();

    const {playerInfantryRatio} = calculatePlayerTypesRatio();

    const {infantryRatio} = calculateTypesRatio();

    if(computerInfantryRatio >= 0.7 && computerInfantryRatio <= 1) {
        setComputerHasTooManyInfantry();
    }

    else if(computerInfantryRatio >= 0.4 && computerInfantryRatio < 0.7) {
        setComputerHasManyInfantry();
    }

    else if(computerInfantryRatio > 0 && computerInfantryRatio < 0.4) {
        setComputerHasFewInfantry();
    }

    else if(computerInfantryRatio === 0) {
        setComputerHasNoInfantry();
    }

    else {
        throw new Error('Invalid computerRatio value');
    }

    if(playerInfantryRatio >= 0.7 && playerInfantryRatio <= 1) {
        setPlayerHasTooManyInfantry();
    }

    else if(playerInfantryRatio >= 0.4 && playerInfantryRatio < 0.7) {
        setPlayerHasManyInfantry();
    }

    else if(playerInfantryRatio > 0 && playerInfantryRatio < 0.4) {
        setPlayerHasFewInfantry();
    }

    else if(playerInfantryRatio === 0) {
        setPlayerHasNoInfantry();
    } 

    else {
        throw new Error('Invalid playerRatio value');
    }

    if(infantryRatio > 0.5 && infantryRatio <= 1) {
        setComputerHasMoreInfantry();
    }

    else if(infantryRatio === 0.5) {
        setEqualNumberOfInfantry();
    }

    else if(infantryRatio >= 0 && infantryRatio < 0.5 && playerInfantryRatio !== 0) {
        setPlayerHasMoreInfantry();
    }

    if(computerInfantryRatio === 0 && playerInfantryRatio === 0) {
        setNoInfantry();
    }
}