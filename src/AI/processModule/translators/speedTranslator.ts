import {
    setSpeedSuperiority,
    setSpeedAdvantage,
    setEqualSpeed,
    setSpeedDisadvantage,
    setSpeedCompleteDisadvantage
} from '../../../store/AI/translators/speedTranslator';

import {
    calculateSpeedRatio
} from '../ratio';

export const translateSpeed = () => {

    const speedRatio = calculateSpeedRatio();

    if(speedRatio >= 0.7 && speedRatio <= 1) {
        setSpeedSuperiority();
    }

    else if(speedRatio >= 0.55 && speedRatio < 0.7) {
        setSpeedAdvantage();
    }

    else if(speedRatio > 0.45 && speedRatio < 0.55) {
        setEqualSpeed();
    }

    else if(speedRatio >= 0.3 && speedRatio <= 0.45) {
        setSpeedDisadvantage();
    }

    else if(speedRatio >= 0 && speedRatio < 0.3) {
        setSpeedCompleteDisadvantage();
    }

    else {
        throw new Error('incorrect speedRatio value ' + speedRatio);
    }
}