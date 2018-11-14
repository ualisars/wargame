import { Unit } from "../../../unit";
import { getExplorationNode } from "../../../utils/unit/exploration/getExplorationNode";
import { getDistanceBetweenTwoNodesInGrids, getDistanceBetweenTwoUnitsInGrids, getSurroundedEnemies } from "../../../utils";
import { assignExplorationTask } from "../tasks/assignExploration";
import { visibleForComputerUnits } from "../../../store/unit/visibleUnits";
import { isEnemyVulnerableToUnit, isEnemyDangerousForUnit } from "../../../utils/unit/AI/AI_actions";
import { getSurroundedUnits } from "../../../utils/surrounded/getSurroundedUnits";
import { computerUnits } from "../../../store/unit/units";
import { simulateFight } from "../simulations/simulateFight";
import { calculateTotalUnitsWeight } from "../weight/calculateUnitsWeight";
import { calculateTotalVulnerability } from "../vulnerability/totalVulnerability";

export const calculateEfficiency = (unit: Unit) => {
    if(visibleForComputerUnits.length === 0) {
        return explorationUnitEfficiency(unit);
    } 
    else {
        return unitEfficiency(unit);
    }
}

export const explorationUnitEfficiency = (unit: Unit): number => {
    assignExplorationTask();
    const maxEfficiency: number = 100;
    const percentage: number = 10;
    let explorationNode = getExplorationNode();
    const distance = getDistanceBetweenTwoNodesInGrids(unit.currentNode, explorationNode);
    if(unit.task === 'exploration') {
        return maxEfficiency - distance * percentage;
    } else {
        return unitEfficiency(unit);
    }
}

export const unitEfficiency = (unit: Unit): number => {
    let closeEnemies = getSurroundedUnits(unit, visibleForComputerUnits, 5);
    let closeAllies =  getSurroundedUnits(unit, computerUnits, 5);
    let closeEnemiesNumber = closeEnemies.length;
    let closeAlliesNumber = closeAllies.length;
    const closeAlliesWeight: number = calculateTotalUnitsWeight(closeAllies) + unit.weight;
    const closeEnemiesWeight: number = calculateTotalUnitsWeight(closeEnemies);

    // one unit and one enemy
    if(closeEnemiesNumber === 1 && closeAlliesNumber === 0) {
        let enemy = closeEnemies[0];
        if(isEnemyVulnerableToUnit(unit, enemy)) {
            return 100;
        }
        else if(isEnemyDangerousForUnit(unit, enemy)) {
            return 0;
        } 
        else {
            let {unitHealthRemain} = simulateFight(unit, enemy);
            return unitHealthRemain;
        }
    }

    // one unit and many enemies
    else if(closeEnemiesNumber > 1 && closeAlliesNumber === 0) {
        let weightRatio: number = unit.weight / closeEnemiesWeight;
        weightRatio = weightRatio <= 2 ? weightRatio : 2;
        return Math.round(weightRatio * 50);
    }

    // many allies and many enemies
    else if(closeEnemiesNumber > 1 || closeAlliesNumber > 0) {
        let weightRatio: number = (closeAlliesWeight + unit.weight) / closeEnemiesWeight;
        weightRatio = weightRatio <= 2 ? weightRatio : 2;
        return Math.round(weightRatio * 50);
    }

    // no enemies and many allies
    else if(closeEnemiesNumber === 0 && closeAlliesNumber > 0) {
        let vulnerabilityWithoutUnit = calculateTotalVulnerability(closeAllies, unit) / closeAlliesNumber;
        let vulnerabilityWithUnit = calculateTotalVulnerability(closeAllies) / closeAlliesNumber + 1;
        let vulnerabilityDifference = vulnerabilityWithoutUnit - vulnerabilityWithUnit; 
        if(vulnerabilityDifference > 0) {
            let efficiency = vulnerabilityDifference * 1.4;
            efficiency = efficiency <= 100 ? efficiency : 100;
            return efficiency;
        }
    }

    else {
        return 0;
    }
}