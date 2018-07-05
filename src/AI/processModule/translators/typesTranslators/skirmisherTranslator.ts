import {
    calculateComputerTypesRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../ratio';

import {
    setComputerHasTooManySkirmishers,
    setPlayerHasTooManySkirmishers,
    setComputerHasManySkirmishers,
    setPlayerHasManySkirmishers,
    setComputerHasFewSkirmishers,
    setPlayerHasFewSkirmishers,
    setComputerHasNoSkirmishers,
    setPlayerHasNoSkirmishers,
    setComputerHasMoreSkirmishers,
    setPlayerHasMoreSkirmishers,
    setNoSkirmishers,
    setEqualNumberOfSkirmishers,
    resetSkirmisherTranslatorStore
} from '../../../../store/AI/translators/typesTranslators/skirmisherTranslatorStore';



export const translateSkirmishers = () => {

    resetSkirmisherTranslatorStore();

    // get ratio for each unit type
    const {computerSkirmisherRatio} = calculateComputerTypesRatio();

    const {playerSkirmisherRatio} = calculatePlayerTypesRatio();

    const {skirmisherRatio} = calculateTypesRatio();

    console.log('computerSkirmisherRatio', computerSkirmisherRatio);
    console.log('playerSkirmisherRatio', playerSkirmisherRatio);
    console.log('skirmisherRatio', skirmisherRatio);
   
    if(computerSkirmisherRatio >= 0.6) {
        setComputerHasTooManySkirmishers();
    }

    else if(computerSkirmisherRatio >= 0.3 && computerSkirmisherRatio < 0.6) {
        setComputerHasManySkirmishers();
    }

    else if(computerSkirmisherRatio > 0 && computerSkirmisherRatio < 0.3) {
        setComputerHasFewSkirmishers();
    }

    else if(computerSkirmisherRatio === 0) {
        setComputerHasNoSkirmishers();
    }

    else {
        throw new Error('invalid computerRatio value');
    }

    if(playerSkirmisherRatio >= 0.6) {
        setPlayerHasTooManySkirmishers();
    }

    else if(playerSkirmisherRatio >= 0.3 && playerSkirmisherRatio < 0.6) {
        setPlayerHasManySkirmishers();
    }

    else if(playerSkirmisherRatio > 0 && playerSkirmisherRatio < 0.3) {
        setPlayerHasFewSkirmishers();
    }

    else if(playerSkirmisherRatio === 0) {
        setPlayerHasNoSkirmishers();
    }

    else {
        throw new Error('invalid playerRatio value');
    }

    if(skirmisherRatio > 0.5) {
        setComputerHasMoreSkirmishers();
    }

    else if(skirmisherRatio === 0.5) {
        setEqualNumberOfSkirmishers();
    }

    else if(skirmisherRatio < 0.5 && playerSkirmisherRatio != 0) {
        setPlayerHasMoreSkirmishers();
    }

    if(playerSkirmisherRatio == 0 && computerSkirmisherRatio == 0) {
        setNoSkirmishers();
    }
    
}