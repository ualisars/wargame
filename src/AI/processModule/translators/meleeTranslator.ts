import {
    setMeleeSuperiority,
    setMeleeAdvantage,
    setEqualMelee,
    setMeleeDisadvantage,
    setMeleeCompleteDisadvantage
} from '../../../store/AI/translators/meleeTranslator';

import {
    calculateMeleeDamageRatio
} from '../ratio';

export const translateMelee = () => {

    const meleeRatio = calculateMeleeDamageRatio();

    if(meleeRatio >= 0.7 && meleeRatio <= 1) {
        setMeleeSuperiority();
    }

    else if(meleeRatio >= 0.55 && meleeRatio < 0.7) {
        setMeleeAdvantage();
    }

    else if(meleeRatio > 0.45 && meleeRatio < 0.55) {
        setEqualMelee();
    }

    else if(meleeRatio >= 0.2 && meleeRatio <= 0.45) {
        setMeleeDisadvantage();
    }

    else if(meleeRatio >= 0 && meleeRatio < 0.2) {
        setMeleeCompleteDisadvantage();
    }

    else {
        throw new Error('invalid meleeRatio value ' + meleeRatio);
    }
}