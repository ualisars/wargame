import { Unit } from "../../../unit";
import { getExplorationNode } from "../../../utils/unit/exploration/getExplorationNode";
import { getDistanceBetweenTwoNodesInGrids } from "../../../utils";
import { assignExplorationTask } from "../tasks/assignExploration";
import { visibleForComputerUnits } from "../../../store/unit/visibleUnits";

export const calculateEfficiency = (unit: Unit) => {
    if(visibleForComputerUnits.length === 0) {
        efficiencyInExplorationStage(unit);
    } else {
        for(let enemy of visibleForComputerUnits) {
           
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