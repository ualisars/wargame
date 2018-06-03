import {strategy} from '../../../../../store/AI/strategy/computerStrategy';
import {
    calculateTotalRatio
} from '../../../../processModule/ratio';

import {
    caseRatioFrom20To40,
    caseRatioFrom40To60,
    caseRatioLessThan20,
    caseRatioMoreThan60,
    caseRatioMoreThan80,
    caseRatioMoreThan90
} from './cases';


export const assessOffensivePoints = (): number => {
    
    const totalRatio: number = calculateTotalRatio();
    let offensivePoints: number;

    if(totalRatio >= 90) {
        offensivePoints = caseRatioMoreThan90();
    }

    else if(totalRatio >= 80) {
        offensivePoints = caseRatioMoreThan80();
    }

    else if(totalRatio >= 60) {
        offensivePoints = caseRatioMoreThan60();
    }

    else if(totalRatio >= 40 && totalRatio < 60) {
        offensivePoints = caseRatioFrom40To60();
    }

    else if(totalRatio >= 20 && totalRatio < 40) {
        offensivePoints = caseRatioFrom20To40();
    }

    else if(totalRatio >= 0 && totalRatio < 20) {
        offensivePoints = caseRatioLessThan20();
    }

    else {
        throw new Error('incorrect totalRatio');
    }



    if(offensivePoints >= 0 && offensivePoints <= 100) {
        return offensivePoints;
    } else {
        throw new Error('incorrect offensivePoints');
    }

}