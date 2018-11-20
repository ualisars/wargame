import { computerUnits } from "../../../../store/unit/units";
import PriorityQueue from "../../../../store/queues/PriorityQueue";
import Positions from "../../../../store/AI/positions/Positions";
import { fillSimulationNodes } from "../../../analyzeModule/fillSimulationNodes";
import { calculateTotalEfficiency } from "../../../processModule/efficiency/totalEfficiency";


export const bestPosition = (): Positions => {
    let positionsQueue = new PriorityQueue();
    let currentUnitIndex = computerUnits.length - 1;
    algorithm(currentUnitIndex, positionsQueue);
    return positionsQueue.extractMax();
}

const algorithm = (currentUnitIndex: number, positionsQueue: PriorityQueue, i: number = 1) => {
    if(currentUnitIndex === -1) {
        console.log('currentUnitIndex');
        return;
    } 
    if(i === 10000) {
        console.log('i === 10000');
        return;
    }
    let simulationNodes = fillSimulationNodes();
    let positions = new Positions();
    for(let i = 0; i < computerUnits.length; ++i) {
        if(i == currentUnitIndex) continue;
        let node = simulationNodes.pop();
        positions.addPosition(computerUnits[i].id, node);
    }
    while(!simulationNodes.isEmpty()) {
        let node = simulationNodes.pop();
        positions.addPosition(computerUnits[currentUnitIndex].id, node);
        let unitsWithSimulatingPositions = positions.getUnitsWithSimulatingPositions();
        let efficiency = calculateTotalEfficiency(unitsWithSimulatingPositions);
        positionsQueue.insert(efficiency, positions);
    }
    currentUnitIndex -= 1;
    i += 1;
    algorithm(currentUnitIndex, positionsQueue, i);
}

const addAllUnitPositions = (): Positions => {
    let positions = new Positions();
    for(let unit of computerUnits) {
        positions.addPosition(unit.id, unit.currentNode);
    }
    return positions;
}