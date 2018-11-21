import { bestPosition } from "../decisionUnit/bestPositionAlgorithm/bestPosition";
import Positions from "../../../store/AI/positions/Positions";
import { computerUnits } from "../../../store/unit/units";
import { moveTo } from '../../../unit/movement/common/moveTo';

export const moveUnits = () => {
    let positions: Positions = bestPosition();
    console.log('positions', positions);
    for(let unit of computerUnits) {
        let nodeToMove = positions.getPositionByUnitId(unit.id);
        moveTo(unit, nodeToMove.x, nodeToMove.y);
    }
}