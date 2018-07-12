import {translateTotalAdvantage} from './totalAdvantageTranslator'
import {translateMelee} from './meleeTranslator';
import {translateSpeed} from './speedTranslator';
import {
    translateCavalry,
    translateHeavyInfantry,
    translateInfantry,
    translateLightInfantry,
    translateScouts,
    translateSkirmishers,
    translateSpearmen
} from './typesTranslators';

export const translateAll = () => {
    translateTotalAdvantage();
    translateMelee();
    translateSpeed();
    translateCavalry();
    translateHeavyInfantry();
    translateInfantry();
    translateLightInfantry();
    translateScouts();
    translateSkirmishers();
    translateSpearmen()
}
