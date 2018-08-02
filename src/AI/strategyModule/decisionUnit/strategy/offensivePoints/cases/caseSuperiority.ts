import {
    getRandomValueInRange,
    getRandomValueInRangeWithProbability
} from '../../../../../../utils/random';
import '../../../../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';
import { playerHasTooManySkirmishers, playerHasManySkirmishers, playerHasFewSkirmishers, computerHasTooManySkirmishers, computerHasManySkirmishers, playerHasLotsOfSkirmishers, computerHasLotsOfSkirmishers } from '../../../../../../store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore';
import { computerHasTooManyCavalry, computerHasManyCavalry, computerHasLotsOfCavalry } from '../../../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator';
import { playerHasTooManySpearmen, playerHasManySpearmen, playerHasLotsOfSpearmen } from '../../../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';

/*
    this function return ratio in range from 90 to 100
*/

export const caseSuperiority = (): number => {

    let offensivePoints;

    if(playerHasLotsOfSkirmishers && computerHasLotsOfCavalry) {
        offensivePoints = 100;
    }

    else if(computerHasLotsOfSkirmishers && playerHasLotsOfSpearmen) {
        offensivePoints = 100;
    }

    else {
        offensivePoints = getRandomValueInRange(90, 100);
    }

    return offensivePoints;
}