import {
    getRandomValueInRange,
    getRandomValueInRangeWithProbability
} from '../../../../../../utils/random';
import { 
    computerHasTooManyCavalry, 
    computerHasManyCavalry, 
    playerHasNoCavalry, 
    playerHasTooManyCavalry,
    playerHasManyCavalry,
    computerHasMoreCavalry,
    playerHasFewCavalry
} from "../../../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator";
import { 
    computerHasTooManySkirmishers,
    computerHasManySkirmishers, 
    playerHasTooManySkirmishers, 
    playerHasManySkirmishers,
    computerHasNoSkirmishers,
    computerHasFewSkirmishers
} from "../../../../../../store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore";
import { 
    computerHasTooManyInfantry, 
    computerHasManyInfantry, 
    playerHasTooManyInfantry,
    playerHasManyInfantry, 
    setPlayerHasTooManyInfantry
} from '../../../../../../store/AI/translators/typesTranslators/infantryTranslatorStore/infantryTranslator';
import { speedAdvantage } from '../../../../../../store/AI/translators/speedTranslator/speedTranslatorStore';
import { 
    playerHasTooManySpearmen, 
    playerHasNoSpearmen, 
    playerHasManySpearmen, 
    playerHasFewSpearmen, 
    computerHasTooManySpearmen,
    computerHasManySpearmen,
    computerHasFewSpearmen
} from '../../../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';
import { computerHasTooManyScouts } from '../../../../../../store/AI/translators/typesTranslators/scoutTranslatorStore/scoutTranslator';

export const caseAdvantage = (): number => {
    let offensivePoints: number = 0;

    // computer has many cavalry
    if(
        (computerHasTooManyCavalry || computerHasManyCavalry) &&
        (playerHasTooManySkirmishers || playerHasManySkirmishers) &&
        (playerHasNoSpearmen)
    ) {
        offensivePoints = getRandomValueInRange(95, 100);
    }

    else if(
        (computerHasTooManyCavalry || computerHasManyCavalry) &&
        (playerHasTooManySkirmishers || playerHasManySkirmishers) &&
        (playerHasTooManySpearmen || playerHasManySpearmen || playerHasFewSpearmen)
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(60, 90, {
            interval: [70, 80],
            probability: 80
        });
    }

    else if(
        (computerHasTooManyCavalry || computerHasManyCavalry) &&
        (playerHasTooManyCavalry || playerHasManyCavalry) &&
        ((   computerHasTooManySpearmen 
            || computerHasManySpearmen 
            || computerHasFewSpearmen
        ) || computerHasNoSkirmishers) 
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(70, 100, {
            interval: [90, 100],
            probability: 80
        });
    }

    // computer has many infantry

    else if(
        (computerHasTooManyInfantry || computerHasManyInfantry) &&
        (playerHasTooManyInfantry || playerHasManyInfantry) &&
        (computerHasTooManySkirmishers || computerHasManySkirmishers || computerHasFewSkirmishers) &&
        (playerHasTooManyCavalry || playerHasManyCavalry || playerHasFewCavalry) 
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(60, 90, {
            interval: [60, 80],
            probability: 80
        });
    }

    else if(
        (computerHasTooManyInfantry || computerHasManyInfantry) &&
        (playerHasTooManyInfantry || playerHasManyInfantry) &&
        (playerHasTooManyCavalry || playerHasManyCavalry || playerHasFewCavalry)
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(70, 95, {
            interval: [80, 90],
            probability: 70
        }); 
    }

    else if(
        speedAdvantage &&
        (computerHasTooManyInfantry || computerHasManyInfantry) &&
        (playerHasTooManyInfantry || playerHasManyInfantry)
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
            interval: [90, 100],
            probability: 90
        }); 
    }

    else if(
        (computerHasTooManyInfantry || computerHasManyInfantry) &&
        (playerHasTooManyInfantry || playerHasManyInfantry)
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(70, 100, {
            interval: [90, 100],
            probability: 80
        });
    }

    // computer has many skirmishers
    else if(
        (computerHasTooManySkirmishers || computerHasManySkirmishers) &&
        (playerHasTooManySpearmen || playerHasManySkirmishers) &&
        (playerHasNoCavalry)
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
            interval: [90, 100],
            probability: 90
        });
    }

    // computer lots of skirmishers, player lots of cavalry
    else if(
        (computerHasTooManySkirmishers || computerHasManySkirmishers) &&
        (playerHasTooManyCavalry || playerHasManyCavalry) 
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(10, 60, {
            interval: [30, 50],
            probability: 70
        });
    }

    else {
        offensivePoints = getRandomValueInRange(40, 80);
    }

    // validator
    if(offensivePoints < 0 || offensivePoints > 100) {
        throw new Error('incorrect offensivePoints value');
    }

    return offensivePoints;
}