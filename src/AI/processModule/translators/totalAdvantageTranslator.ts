import {
    setComputerCompletelyAdvantageToTrue,
    setComputerAdvantageToTrue,
    setComputerDisadvantageToTrue,
    setComputerCompletelyDisadvantageToTrue
} from '../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    calculateTotalRatio
} from '../ratio';

export const translateTotalAdvantage = () => {

    const totalRatio: number = calculateTotalRatio();
    let offensivePoints: number;

    console.log('translateTotalAdvantage ratio', totalRatio);

    if(totalRatio >= 0.7) {
        setComputerCompletelyAdvantageToTrue();
    }

    else if(totalRatio >= 0.5 && totalRatio < 0.7) {
        setComputerAdvantageToTrue();
    }

    else if(totalRatio >= 0.3 && totalRatio < 0.5) {
        setComputerDisadvantageToTrue();
    }

    else if(totalRatio >= 0 && totalRatio < 0.3) {
        setComputerCompletelyDisadvantageToTrue();
    }

    else {
        throw new Error('incorrent total ratio ' + totalRatio);
    }
}