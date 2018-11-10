class Positions {
    private positions: any = {};
   
    addPosition(unitId: number, nodeX: number, nodeY: number) {
        let newPosition = new Position(nodeX, nodeY);
        this.positions[unitId] = newPosition;
    }

    clearPositions() {
        this.positions = [];
    }

    getPositionByUnitId(unitId: number) {
        return this.positions[unitId];
    }
} 

class Position {
    nodeX: number;
    nodeY: number;

    constructor(nodeX: number, nodeY: number) {
        this.nodeX = nodeX;
        this.nodeY = nodeY;
    }
}

export default Positions;