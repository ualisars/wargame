import MapNode from "../../../map/nodes/MapNode";

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
} 

export default Positions;