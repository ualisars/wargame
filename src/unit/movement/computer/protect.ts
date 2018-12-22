import { Unit } from "../../types";
import { getDistanceBetweenTwoUnitsInGrids } from "../../../utils";

export const protect = (unit: Unit, unitToProtect: Unit, newCommand: boolean = false) => {
    let distanceBetweenUnits: number = getDistanceBetweenTwoUnitsInGrids(unit, unitToProtect);
    while(!newCommand) {
        if(unitToProtect.isFighting) {
            let unitToAttack: Unit;
            if(unitToProtect.figthAgainst) {

            }
        }
        if(distanceBetweenUnits >= 3) {
            moveTo(unitToProtect.currentNode.x, unitToProtect.currentNode.y);
        }
        else {
           
        }
    }
}