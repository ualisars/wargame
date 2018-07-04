import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';
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
} from '../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';
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
} from '../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore';

export const translateSpearmen = () => {

    resetSpearmenTranslatorStore();

    resetSpearmenTranslatorStore();

    // get ratio for each unit type
    const {computerSpearmenRatio} = calculateComputerTypesRatio();

    const {playerSpearmenRatio} = calculatePlayerTypesRatio();

    const {spearmenRatio} = calculateTypesRatio();

    if(computerSpearmenRatio >= 0.6 && computerSpearmenRatio <= 1) {
        setComputerHasTooManySpearmen();
    }

    else if(computerSpearmenRatio >= 0.3 && computerSpearmenRatio < 0.6) {
        setComputerHasManySpearmen();
    }

    else if(computerSpearmenRatio > 0 && computerSpearmenRatio < 0.3) {
        setComputerHasFewSpearmen();
    }

    else if(computerSpearmenRatio === 0) {
        setComputerHasNoSpearmen();
    }

    else {
        throw new Error('Invalid computerSpearmenRatio value');
    }

    if(playerSpearmenRatio >= 0.6 && playerSpearmenRatio <= 1) {
        setPlayerHasTooManySpearmen();
    }

    else if(playerSpearmenRatio >= 0.3 && playerSpearmenRatio < 0.6) {
        setPlayerHasManySpearmen();
    }

    else if(playerSpearmenRatio > 0 && playerSpearmenRatio < 0.3) {
        setPlayerHasFewSpearmen();
    }

    else if(playerSpearmenRatio === 0) {
        setPlayerHasNoSpearmen();
    } 

    else {
        throw new Error('Invalid playerSpearmenRatio value');
    }

    if(spearmenRatio > 0.5 && spearmenRatio <= 1) {
        setComputerHasMoreSpearmen();
    }

    else if(spearmenRatio === 0.5) {
        setEqualNumberOfSpearmen();
    }

    else if(spearmenRatio >= 0 && spearmenRatio < 0.5 && playerSpearmenRatio !== 0) {
        setPlayerHasMoreSpearmen();
    }

    if(computerSpearmenRatio === 0 && playerSpearmenRatio === 0) {
        setNoSpearmen();
    }
}