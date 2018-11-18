import SimulationNodes from "../../store/AI/simulationNodes/SimulationNodes";
import { units } from "../../store/unit/units";
import { getSurroundedNodes } from "../../utils";

export const fillSimulationNodes = (): SimulationNodes => {
    let simulationNodes = new SimulationNodes();
    for(let unit of units) {
        let surroundedNodes = getSurroundedNodes(unit, 5);
        for(let node of surroundedNodes) {
            simulationNodes.push(node);
        }
    }
    return simulationNodes;
}