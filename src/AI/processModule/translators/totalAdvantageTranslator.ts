// import {
//     computerCompletelyAdvantage,
//     computerAdvantage,
//     computerDisadvantage,
//     computerCompletelyDisadvantage
// } from '../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    setComputerCompletelyAdvantageToTrue,
    setComputerCompletelyAdvantageToFalse,
    setComputerAdvantageToTrue,
    setComputerAdvantageToFalse,
    setComputerDisadvantageToTrue,
    setComputerDisadvantageToFalse,
    setComputerCompletelyDisadvantageToTrue,
    setComputerCompletelyDisadvantageToFalse
} from '../../../store/AI/translators/totalAdvantage/totalAdvantageTranslator';

import {
    calculateTotalRatio
} from '../ratio';

export const translateTotalAdvantage = () => {

    const totalRatio: number = calculateTotalRatio();
    let offensivePoints: number;

    if(totalRatio >= 0.7) {
        setComputerCompletelyAdvantageToTrue();
    }

    else if(totalRatio >= 0.5 && totalRatio < 0.7) {
        setComputerAdvantageToTrue();
    }
}