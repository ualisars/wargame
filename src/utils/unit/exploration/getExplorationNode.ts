import { Unit } from "../../../unit";
import { getRandomUnit } from "../random/getRandomUnit";
import { playerUnits } from "../../../store/unit/units";
import { getSurroundedNodes } from "../../surrounded";
import { getRandomNode } from "../../node";

export const getExplorationNode = () => {
    const randomUnit: Unit = getRandomUnit(playerUnits);
    const surroundedNodes = getSurroundedNodes(randomUnit, 4);
    return getRandomNode(surroundedNodes);
}