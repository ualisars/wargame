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
    playerHasFewCavalry,
    computerHasLotsOfCavalry,
    playerHasLotsOfCavalry,
    playerHasCavalry
} from "../../../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator";
import { 
    computerHasTooManySkirmishers,
    computerHasManySkirmishers, 
    playerHasTooManySkirmishers, 
    playerHasManySkirmishers,
    computerHasNoSkirmishers,
    computerHasFewSkirmishers,
    playerHasSkirmishers,
    playerHasLotsOfSkirmishers,
    computerHasSkirmishers,
    computerHasLotsOfSkirmishers
} from "../../../../../../store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore";
import { 
    computerHasTooManyInfantry, 
    computerHasManyInfantry, 
    playerHasTooManyInfantry,
    playerHasManyInfantry, 
    setPlayerHasTooManyInfantry,
    computerHasLotsOfInfantry,
    playerHasLotsOfInfantry
} from '../../../../../../store/AI/translators/typesTranslators/infantryTranslatorStore/infantryTranslator';
import { speedAdvantage } from '../../../../../../store/AI/translators/speedTranslator/speedTranslatorStore';
import { 
    playerHasTooManySpearmen, 
    playerHasNoSpearmen, 
    playerHasManySpearmen, 
    playerHasFewSpearmen, 
    computerHasTooManySpearmen,
    computerHasManySpearmen,
    computerHasFewSpearmen,
    playerHasSpearmen,
    computerHasSpearmen,
    playerHasLotsOfSpearmen
} from '../../../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';
import { computerHasTooManyScouts } from '../../../../../../store/AI/translators/typesTranslators/scoutTranslatorStore/scoutTranslator';
import { playerHasLotsOfHeavyInfantry } from '../../../../../../store/AI/translators/typesTranslators/heavyInfantryTranslatorStore/heavyInfantryTranslator';

export const caseAdvantage = (): number => {
    let offensivePoints: number = 0;

    // computer has many cavalry
    if(computerHasLotsOfCavalry && playerHasSkirmishers && playerHasNoSpearmen) {
        offensivePoints = getRandomValueInRange(95, 100);
    }

    else if(computerHasLotsOfCavalry && playerHasLotsOfSkirmishers && playerHasSpearmen) {
        offensivePoints = getRandomValueInRangeWithProbability(60, 90, {
            interval: [70, 80],
            probability: 80
        });
    }

    else if(
        computerHasLotsOfCavalry && playerHasLotsOfCavalry &&
        (computerHasSpearmen || computerHasNoSkirmishers) 
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(70, 100, {
            interval: [90, 100],
            probability: 80
        });
    }

    else if(computerHasLotsOfCavalry && playerHasLotsOfCavalry && computerHasSkirmishers) {
        offensivePoints = getRandomValueInRangeWithProbability(50, 80, {
            interval: [60, 70],
            probability: 70
        });
    }

    // computer has many infantry

    else if(
        computerHasLotsOfInfantry && playerHasLotsOfInfantry &&
        computerHasSkirmishers && playerHasCavalry
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(60, 90, {
            interval: [60, 80],
            probability: 80
        });
    }

    else if(computerHasLotsOfInfantry && playerHasLotsOfInfantry && playerHasCavalry) {
        offensivePoints = getRandomValueInRangeWithProbability(70, 95, {
            interval: [80, 90],
            probability: 70
        }); 
    }

    else if(speedAdvantage && computerHasLotsOfInfantry && playerHasLotsOfInfantry) {
        offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
            interval: [90, 100],
            probability: 90
        }); 
    }

    else if(computerHasLotsOfInfantry && playerHasLotsOfInfantry
    ) {
        offensivePoints = getRandomValueInRangeWithProbability(70, 100, {
            interval: [90, 100],
            probability: 80
        });
    }

    // computer has many skirmishers
    else if(computerHasLotsOfSkirmishers && playerHasLotsOfSpearmen && playerHasNoCavalry) {
        offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
            interval: [90, 100],
            probability: 90
        });
    }

    else if(computerHasLotsOfSkirmishers && playerHasLotsOfCavalry) {
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