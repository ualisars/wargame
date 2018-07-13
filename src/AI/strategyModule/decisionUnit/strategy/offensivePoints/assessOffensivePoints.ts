import {strategy} from '../../../../../store/AI/strategy/computerStrategy';
import {
    calculateTotalRatio
} from '../../../../processModule/ratio';

import {
    caseSuperiority,
    caseAdvantage,
    caseDisadvantage,
    caseCompleteDisadvantage,
    caseEquality
} from './cases';
import { computerSuperiority, computerAdvantage, forceEquality, computerDisadvantage, computerCompleteDisadvantage } from '../../../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';


export const assessOffensivePoints = (): number => {
    const totalRatio: number = calculateTotalRatio();
    let offensivePoints: number;

    if(computerSuperiority) {
        offensivePoints = caseSuperiority();
    }

    else if(computerAdvantage) {
        offensivePoints = caseAdvantage();
    }

    else if(forceEquality) {
        offensivePoints = caseEquality();
    }

    else if(computerDisadvantage) {
        offensivePoints = caseDisadvantage();
    }

    else if(computerCompleteDisadvantage) {
        offensivePoints = caseCompleteDisadvantage();
    }

    else {
        throw new Error('incorrect totalRatio');
    }

    return offensivePoints;
}