import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';
import {
    computerHasTooManyCavalry,
    playerHasTooManyCavalry,
    computerHasManyCavalry,
    playerHasManyCavalry,
    computerHasFewCavalry,
    playerHasFewCavalry,
    computerHasNoCavalry,
    playerHasNoCavalry,
    computerHasMoreCavalry,
    playerHasMoreCavalry,
    equalNumberOfCavalry,
    noCavalry
} from '../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator';
import {
    setComputerHasTooManyCavalry,
    setPlayerHasTooManyCavalry,
    setComputerHasManyCavalry,
    setPlayerHasManyCavalry,
    setComputerHasFewCavalry,
    setPlayerHasFewCavalry,
    setComputerHasNoCavalry,
    setPlayerHasNoCavalry,
    setComputerHasMoreCavalry,
    setPlayerHasMoreCavalry,
    setEqualNumberOfCavalry,
    setNoCavalry,
    resetCavalryTranslatorStore
} from '../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore';

export const translateCavalry = () => {

    resetCavalryTranslatorStore();

    const {computerCavalryRatio} = calculateComputerTypesRatio();

    const {playerCavalryRatio} = calculatePlayerTypesRatio();

    const {cavalryRatio} = calculateTypesRatio();

    if(computerCavalryRatio >= 0.6 && computerCavalryRatio <= 1) {
        setComputerHasTooManyCavalry();
    }

    else if(computerCavalryRatio >= 0.3 && computerCavalryRatio < 0.6) {
        setComputerHasManyCavalry();
    }

    else if(computerCavalryRatio > 0 && computerCavalryRatio < 0.3) {
        setComputerHasFewCavalry();
    }

    else if(computerCavalryRatio === 0) {
        setComputerHasNoCavalry();
    }

    else {
        throw new Error('Invalid computerCavalryRatio value')
    }

    if(playerCavalryRatio >= 0.6 && playerCavalryRatio <= 1) {
        setPlayerHasTooManyCavalry();
    }

    else if(playerCavalryRatio >= 0.3 && playerCavalryRatio < 0.6) {
        setPlayerHasManyCavalry();
    }

    else if(playerCavalryRatio > 0 && playerCavalryRatio < 0.3) {
        setPlayerHasFewCavalry();
    }

    else if(playerCavalryRatio === 0) {
        setPlayerHasNoCavalry();
    }

    else {
        throw new Error('Invalid playerCavalryRatio value')
    }

    if(cavalryRatio > 0.5 && cavalryRatio <= 1) {
        setComputerHasMoreCavalry();
    }

    else if(cavalryRatio === 0.5) {
        setEqualNumberOfCavalry();
    }

    else if(cavalryRatio >= 0 && cavalryRatio < 0.5 && playerCavalryRatio !== 0) {
        setPlayerHasMoreCavalry();
    }

    if(computerCavalryRatio === 0 && playerCavalryRatio === 0) {
        setNoCavalry();
    }

}