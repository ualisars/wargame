import {
    getRandomValueInRange,
    getRandomValueInRangeWithProbability
} from '../../../../../../utils/random';
import '../../../../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';
import { playerHasTooManySkirmishers, playerHasManySkirmishers, playerHasFewSkirmishers, computerHasTooManySkirmishers, computerHasManySkirmishers } from '../../../../../../store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore';
import { computerHasTooManyCavalry, computerHasManyCavalry } from '../../../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator';
import { playerHasTooManySpearmen, playerHasManySpearmen } from '../../../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';

/*
    this function return ratio in range from 90 to 100
*/

export const caseSuperiority = (): number => {

    let offensivePoints;

    if( 
        (playerHasTooManySkirmishers || playerHasManySkirmishers) &&
        (computerHasTooManyCavalry || computerHasManyCavalry) 
    ) {
        offensivePoints = 100;
    }

    else if(
        (computerHasTooManySkirmishers || computerHasManySkirmishers) &&
        (playerHasTooManySpearmen || playerHasManySpearmen) 
    ) {
        offensivePoints = 100;
    }

    else {
        offensivePoints = getRandomValueInRange(90, 100);
    }

    return offensivePoints;
}