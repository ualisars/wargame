import { generateRandomAction } from "../randomAction/generateRandomAction";
import { computerUnits } from "../../../../store/unit/units";
import Action from "../randomAction/Action";
import CommandQueue from "../../../../store/queues/CommandQueue";
import Commands from "../../../../store/AI/commands/Commands";
import { calculateTotalEfficiency } from "../../../processModule/efficiency/totalEfficiency";

export const bestActionAlgorithm = (): Commands => {
    const maxAttempts = 10;
    let commandQueue: CommandQueue = new CommandQueue();
    let i = 0;
    while(i <= maxAttempts) {
        let commands: Commands = new Commands();
        for(let unit of computerUnits) {
            let action: Action = generateRandomAction(unit);
            commands.addCommand(unit.id, action);
        }
        let unitsWithSimulatingPositions = commands.getUnitsWithSimulatingPositions();
        let efficiency = calculateTotalEfficiency(unitsWithSimulatingPositions);
        commandQueue.insert(efficiency, commands);
        i = i + 1;
    }
    return commandQueue.extractMax();
}