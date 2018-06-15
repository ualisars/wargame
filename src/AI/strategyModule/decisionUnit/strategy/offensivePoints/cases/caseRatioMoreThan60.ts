import {
    calculateMeleeDamageRatio,
    calculateSpeedRatio,
    calculateComputerTypesRatio,
    calculateTotalRatio,
    calculateTypesRatio,
    calculatePlayerTypesRatio
} from '../../../../../processModule/ratio';
import {
    getRandomValueInRange,
    getRandomValueInRangeWithProbability
} from '../../../../../../utils/random';

export const caseRatioMoreThan60 = (): number => {

    let offensivePoints: number = 0;

     // get ratio for each unit type
     const {
        computerInfantryRatio,
        computerSpearmenRatio,
        computerLightInfantryRatio,
        computerHeavyInfantryRatio,
        computerSkirmisherRatio,
        computerCavalryRatio
    } = calculateComputerTypesRatio();

    const {
        playerInfantryRatio,
        playerSpearmenRatio,
        playerLightInfantryRatio,
        playerHeavyInfantryRatio,
        playerScoutsRatio,
        playerSkirmisherRatio,
        playerCavalryRatio
    } = calculatePlayerTypesRatio();

    const {
        infantryRatio,
        spearmenRatio,
        lightInfantryRatio,
        heavyInfantryRatio,
        skirmisherRatio,
        cavalryRatio
    } = calculateTypesRatio();

    const speedRatio: number = calculateSpeedRatio();
    const meleeDamageRatio: number = calculateMeleeDamageRatio();

    // case computer have speedAdvantage

    if(speedRatio >= 0.7) {

        if(playerSkirmisherRatio >= 0.6 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
                interval: [90, 100],
                probability: 90
            });
        }

        else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
                interval: [90, 100],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.8) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
                interval: [90, 100],
                probability: 90
            });
        }

        else {
            offensivePoints = getRandomValueInRange(50, 90);
        }
    }

    else if(speedRatio >= 0.6 && speedRatio < 0.7) {

        if(playerSkirmisherRatio >= 0.6 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
                interval: [90, 100],
                probability: 70
            });
        }

        else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(70, 100, {
                interval: [90, 100],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.8) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 100, {
                interval: [90, 100],
                probability: 90
            });
        }
        
        else {
            offensivePoints = getRandomValueInRange(40, 80);
        }
    }

    else if(speedRatio >= 0.4 && speedRatio < 0.6) {

        if(playerSkirmisherRatio >= 0.6 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 95, {
                interval: [85, 95],
                probability: 70
            });
        }

        else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(70, 90, {
                interval: [80, 90],
                probability: 70
            });
        }

        else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio != 0 && meleeDamageRatio > 0.7) {
            offensivePoints = getRandomValueInRangeWithProbability(80, 95, {
                interval: [85, 95],
                probability: 80
            });
        }

        else if(meleeDamageRatio > 0.8) {
            offensivePoints = getRandomValueInRangeWithProbability(70, 90, {
                interval: [80, 90],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.6) {
            offensivePoints = getRandomValueInRangeWithProbability(70, 90, {
                interval: [80, 90],
                probability: 60
            });
        }

        else {
            offensivePoints = getRandomValueInRange(30, 70);
        }
    }

    else if(speedRatio < 0.4) {

        if(playerSkirmisherRatio >= 0.6 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(70, 90, {
                interval: [80, 90],
                probability: 70
            });
        }

        else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(60, 80, {
                interval: [70, 80],
                probability: 70
            });
        }

        else if(playerSkirmisherRatio >= 0.4 && playerSkirmisherRatio != 0 && meleeDamageRatio > 0.7) {
            offensivePoints = getRandomValueInRangeWithProbability(70, 90, {
                interval: [80, 90],
                probability: 80
            });
        }

        else if(meleeDamageRatio > 0.8 && computerSkirmisherRatio >= 0.8 && computerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(30, 90, {
                interval: [40, 60],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.8 && computerSkirmisherRatio >= 0.6 && computerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(30, 90, {
                interval: [60, 80],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.8) {
            offensivePoints = getRandomValueInRangeWithProbability(60, 90, {
                interval: [70, 80],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.6 && computerSkirmisherRatio >= 0.8 && computerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(10, 70, {
                interval: [20, 40],
                probability: 70
            });
        }

        else if(meleeDamageRatio > 0.6 && computerSkirmisherRatio >= 0.6 && computerSkirmisherRatio != 0) {
            offensivePoints = getRandomValueInRangeWithProbability(10, 60, {
                interval: [30, 60],
                probability: 60
            });
        }

        else {
            offensivePoints = getRandomValueInRange(0, 60);
        }
    }

    return offensivePoints;
}