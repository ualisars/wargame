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
    setComputerHasMoreSkirmishers,
    setPlayerHasMoreSkirmishers,
    setEqualNumberOfSkirmishers,
    setSkirmisherMinority,
    setNoSkirmishers,
    setSkirmisherStoreToDefault
} from '../../../../store/AI/translators/typesTranslators/shirmisherTranslatorStore';



export const translateSkirmishers = () => {

    setSkirmisherStoreToDefault();

    // get ratio for each unit type
    const {computerSkirmisherRatio} = calculateComputerTypesRatio();

    const {playerSkirmisherRatio} = calculatePlayerTypesRatio();

    const {skirmisherRatio} = calculateTypesRatio();
   
    if(computerSkirmisherRatio >= 0.6) {
        setComputerHasTooManySkirmishers();
    }

    else if(computerSkirmisherRatio >= 0.4 && computerSkirmisherRatio < 0.6) {
        setComputerHasManySkirmishers();
    }

    if(playerSkirmisherRatio >= 0.6) {
        setPlayerHasTooManySkirmishers();
    }

    else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio < 0.6) {
        setPlayerHasManySkirmishers();
    }

    if(skirmisherRatio > 0.55) {
        setComputerHasMoreSkirmishers();
    }

    else if(skirmisherRatio >= 0.45 && skirmisherRatio <= 0.55) {
        setEqualNumberOfSkirmishers();
    }

    else if(skirmisherRatio < 0.45 && playerSkirmisherRatio != 0) {
        setPlayerHasMoreSkirmishers();
    }

    if(computerSkirmisherRatio != 0 || playerSkirmisherRatio != 0) {
        if(computerSkirmisherRatio <= 0.4 && playerSkirmisherRatio <= 0.4) {
            setSkirmisherMinority();
        }
    }

    if(playerSkirmisherRatio == 0 && computerSkirmisherRatio == 0) {
        setNoSkirmishers();
    }


}