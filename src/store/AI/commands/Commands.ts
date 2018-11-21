import { computerUnits } from "../../unit/units";
import { Unit } from "../../../unit";
import Action from "../../../AI/strategyModule/decisionUnit/randomAction/Action";

class Commands {
    private commands: any = {};
    addCommand(unitId: number, action: Action) {
        this.commands[unitId] = action;
    }

    clearCommands() {
        this.commands = {};
    }

    getCommandsByUnitId(unitId: number) {
        return this.commands[unitId];
    }

    getUnitsWithSimulatingPositions() {
        let unitsWithSimulatingPositions: Unit[] = [];
        for(let unit of computerUnits) {
            let updatedUnit = Object.create(unit);
            let node = this.getCommandsByUnitId(updatedUnit.id).node;
            updatedUnit.setX(node.x);
            updatedUnit.setY(node.y);
            updatedUnit.setCurrentNode(node);
            unitsWithSimulatingPositions.push(updatedUnit);
        }
        return unitsWithSimulatingPositions;
    }
} 

export default Commands;