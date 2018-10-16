import {getRandomValueInRangeWithProbability} from '../../../utils/random';

export default class AIMode {
    private offensivePoints: number = 0;
    defensiveRange: MinMax = new MinMax(0, 20)
    passiveRange: MinMax = new MinMax(21, 40);
    neutralRange: MinMax = new MinMax(41, 60);
    activeRange: MinMax = new MinMax(60, 74)
    aggresiveRange: MinMax = new MinMax(75, 89);
    offensiveRange: MinMax = new MinMax(90, 100);

    setDefensive() {
        this.offensivePoints = getRandomValueInRangeWithProbability(0, 20, {
            interval: [10, 20],
            probability: 90
        });
    }

    setPassive() {
        this.offensivePoints = getRandomValueInRangeWithProbability(21, 40, {
            interval: [30, 40],
            probability: 90
        });
    }

    setNeutral() {
        this.offensivePoints = getRandomValueInRangeWithProbability(41, 60, {
            interval: [50, 60],
            probability: 70
        });
    }

    setActive() {
        this.offensivePoints = getRandomValueInRangeWithProbability(60, 74, {
            interval: [65, 74],
            probability: 60
        }); 
    }

    setAggressive() {
        this.offensivePoints = getRandomValueInRangeWithProbability(75, 89, {
            interval: [80, 85],
            probability: 90
        });
    }

    setOffensive() {
        this.offensivePoints = getRandomValueInRangeWithProbability(90, 100, {
            interval: [95, 100],
            probability: 70
        });
    }

    getOffensivePoints() {
        return this.offensivePoints;
    }
}

class MinMax {
    min: number;
    max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
}