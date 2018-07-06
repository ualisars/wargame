import {
    setComputerSuperiority,   
    setComputerAdvantage,
    setEquality,
    setComputerDisadvantage,
    setComputerCompletelyDisadvantage
} from '../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    calculateTotalRatio
} from '../ratio';

export const translateTotalAdvantage = () => {

    const totalRatio: number = calculateTotalRatio();
    
    console.log('totalRatio', totalRatio);

    if(totalRatio >= 0.7) {
        setComputerSuperiority();
    }

    else if(totalRatio > 0.5 && totalRatio < 0.7) {
        setComputerAdvantage();
    }

    else if(totalRatio === 0.5) {
        setEquality();
    }

    else if(totalRatio >= 0.3 && totalRatio < 0.5) {
        setComputerDisadvantage();
    }

    else if(totalRatio >= 0 && totalRatio < 0.3) {
        setComputerCompletelyDisadvantage();
    }

    else {
        throw new Error('incorrent total ratio value ' + totalRatio);
    }
}