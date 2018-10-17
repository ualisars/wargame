import {computerMode} from '../../../../../../store/AI/strategy/computerMode';
import {  
    playerHasNoCavalry, 
    computerHasLotsOfCavalry,
    playerHasLotsOfCavalry,
    playerHasCavalry
} from "../../../../../../store/AI/translators/typesTranslators/cavalryTranslatorStore/cavalryTranslator";
import { 
    computerHasNoSkirmishers,
    playerHasSkirmishers,
    playerHasLotsOfSkirmishers,
    computerHasSkirmishers,
    computerHasLotsOfSkirmishers
} from "../../../../../../store/AI/translators/typesTranslators/skirmisherTranslatorStore/skirmisherTranslatorStore";
import { 
    computerHasLotsOfInfantry,
    playerHasLotsOfInfantry
} from '../../../../../../store/AI/translators/typesTranslators/infantryTranslatorStore/infantryTranslator';
import { speedAdvantage } from '../../../../../../store/AI/translators/speedTranslator/speedTranslatorStore';
import { 
    playerHasNoSpearmen, 
    playerHasSpearmen,
    computerHasSpearmen,
    playerHasLotsOfSpearmen
} from '../../../../../../store/AI/translators/typesTranslators/spearmenTranslatorStore/spearmenTranslator';

export const caseAdvantage = () => {
    // computer has many cavalry
    if(computerHasLotsOfCavalry && playerHasSkirmishers && playerHasNoSpearmen) {
        computerMode.setOffensive();
    }

    else if(computerHasLotsOfCavalry && playerHasLotsOfSkirmishers && playerHasSpearmen) {
        computerMode.setActive();
    }

    else if(
        computerHasLotsOfCavalry && playerHasLotsOfCavalry &&
        (computerHasSpearmen || computerHasNoSkirmishers) 
    ) {
        computerMode.setAggressive();
    }

    else if(computerHasLotsOfCavalry && playerHasLotsOfCavalry && computerHasSkirmishers) {
       computerMode.setActive();
    }

    // computer has many infantry

    else if(
        computerHasLotsOfInfantry && playerHasLotsOfInfantry &&
        computerHasSkirmishers && playerHasCavalry
    ) {
        computerMode.setNeutral();
    }

    else if(computerHasLotsOfInfantry && playerHasLotsOfInfantry && playerHasCavalry) {
       computerMode.setActive();
    }

    else if(speedAdvantage && computerHasLotsOfInfantry && playerHasLotsOfInfantry) {
       computerMode.setOffensive();
    }

    else if(computerHasLotsOfInfantry && playerHasLotsOfInfantry) {
       computerMode.setAggressive();
    }

    // computer has many skirmishers
    else if(computerHasLotsOfSkirmishers && playerHasLotsOfSpearmen && playerHasNoCavalry) {
       computerMode.setOffensive();
    }

    else if(computerHasLotsOfSkirmishers && playerHasLotsOfCavalry) {
        computerMode.setDefensive();
    }

    else {
        computerMode.setRandom();
    }
}