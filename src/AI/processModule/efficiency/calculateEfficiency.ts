import { Unit } from "../../../unit";
import { getExplorationNode } from "../../../utils/unit/exploration/getExplorationNode";
import { getDistanceBetweenTwoNodesInGrids, getDistanceBetweenTwoUnitsInGrids, getSurroundedEnemies } from "../../../utils";
import { assignExplorationTask } from "../tasks/assignExploration";
import { visibleForComputerUnits } from "../../../store/unit/visibleUnits";
import { isEnemyVulnerableToUnit, isEnemyDangerousForUnit } from "../../../utils/unit/AI/AI_actions";
import { getSurroundedUnits } from "../../../utils/surrounded/getSurroundedUnits";
import { computerUnits } from "../../../store/unit/units";

export const calculateEfficiency = (unit: Unit) => {
    const dangerousDistance: number = 3;
    const closeDistance: number = 6;
    const mediumDistance: number = 12;
    const longDistance: number = 17;
    if(visibleForComputerUnits.length === 0) {
        efficiencyInExplorationStage(unit);
    } else {
        let closeEnemies = getSurroundedUnits(unit, visibleForComputerUnits, 5);
        let closeEnemiesNumber = closeEnemies.length;
        let closeAlliesNumber = getSurroundedUnits(unit, computerUnits, 5).length;
        let quantityAdvantage = closeAlliesNumber - closeEnemiesNumber + 1; 
        if(closeEnemiesNumber === 1 && closeAlliesNumber === 0) {
            let enemy = closeEnemies[0];
            if(isEnemyVulnerableToUnit(unit, enemy)) {
                return 100;
            }
            else if(isEnemyDangerousForUnit(unit, enemy)) {
                return 0;
            } 
            else {
                
            }
        }
    }
}

export const efficiencyInExplorationStage = (unit: Unit) => {
    assignExplorationTask();
    const maxEfficiency: number = 100;
    const percentage: number = 10;
    let explorationNode = getExplorationNode();
    const distance = getDistanceBetweenTwoNodesInGrids(unit.currentNode, explorationNode);
    if(unit.task === 'exploration') {
        return maxEfficiency - distance * percentage;
    }
}