import { Unit } from "../../../../unit";
import MapNode from "../../../../map/nodes/MapNode";
import { Command } from "./Command";

class Action {
    unit: Unit;
    node : MapNode;
    command: Command
    actionUnit: Unit;

    constructor(unit: Unit, node: MapNode, command: Command, actionUnit: Unit = null) {
        this.unit = unit;
        this.node = node;
        this.command = command;
        this.actionUnit = actionUnit
    }
}

export default Action;