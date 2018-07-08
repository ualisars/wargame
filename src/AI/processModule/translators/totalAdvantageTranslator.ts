import {
    setComputerSuperiority,   
    setComputerAdvantage,
    setForceEquality,
    setComputerDisadvantage,
    setComputerCompleteDisadvantage
} from '../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    calculateTotalRatio
} from '../ratio';

export const translateTotalAdvantage = () => {

    const totalRatio: number = calculateTotalRatio();

    if(totalRatio >= 0.7) {
        setComputerSuperiority();
    }

    else if(totalRatio > 0.5 && totalRatio < 0.7) {
        setComputerAdvantage();
    }

    else if(totalRatio === 0.5) {
        setForceEquality();
    }

    else if(totalRatio >= 0.3 && totalRatio < 0.5) {
        setComputerDisadvantage();
    }

    else if(totalRatio >= 0 && totalRatio < 0.3) {
        setComputerCompleteDisadvantage();
    }

    else {
        throw new Error('incorrent total ratio value ' + totalRatio);
    }
}