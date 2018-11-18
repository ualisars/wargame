import { computerUnits } from "../../../../store/unit/units";
import { initialMap } from "../../../../map/createMap/initialMap";
import PriorityQueue from "../../../../store/queues/PriorityQueue";
import { Unit } from "../../../../unit";
import Positions from "../../../../store/AI/positions/Positions";
import { calculateEfficiency } from "../../../processModule/efficiency/calculateEfficiency";
import { fillSimulationNodes } from "../../../analyzeModule/fillSimulationNodes";


export const bestPosition = () => {
    let positionsQueue = new PriorityQueue();
    for(let unit of computerUnits) {
        for(let node of initialMap) {
            let positions = addAllUnitPositions();
            positions.addPosition(unit.id, node);
            let unitsWithSimulatingPositions = positions.getUnitsWithSimulatingPositions();
            let efficiency = calculateEfficiency(unit, unitsWithSimulatingPositions);
            positionsQueue.insert(efficiency, positions);
        }
    }
    // sample
    let simulationNodes = fillSimulationNodes();
    let positions = new Positions();
    let unit = computerUnits[0];
    // for(let node of simutationNodes) {
    //     positions.addPosition(unit.id, node);
    //     for(let i = 1; i < computerUnits.length; ++i) {
    //         for(let node of simulationNodes) {

    //         }
    //     }
    // }
}

const addAllUnitPositions = (): Positions => {
    let positions = new Positions();
    for(let unit of computerUnits) {
        positions.addPosition(unit.id, unit.currentNode);
    }
    return positions;
}