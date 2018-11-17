import MapNode from "../../../map/nodes/MapNode";
import { computerUnits } from "../../unit/units";
import { Unit } from "../../../unit";
import { getNodeFromMap } from "../../../utils";

class Positions {
    private positions: any = {};
   
    addPosition(unitId: number, node: MapNode) {
        this.positions[unitId] = node;
    }

    clearPositions() {
        this.positions = [];
    }

    getPositionByUnitId(unitId: number) {
        return this.positions[unitId];
    }

    getUnitsWithSimulatingPositions() {
        let unitsWithSimulatingPositions: Unit[] = [];
        for(let unit of computerUnits) {
            let updatedUnit = Object.assign({}, unit);
            let position = this.getPositionByUnitId(updatedUnit.id);
            updatedUnit.setX(position.x);
            updatedUnit.setY(position.y);
            let node = getNodeFromMap(position.x, position.y);
            updatedUnit.setCurrentNode(node);
            unitsWithSimulatingPositions.push(updatedUnit);
        }
        return unitsWithSimulatingPositions;
    }
} 

export default Positions;