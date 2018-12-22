import { computerUnits } from "../../../../store/unit/units";

export const setCommandNumberToUnits = (commandNumber: number) => {
    for(let unit of computerUnits) {
        unit.setCommandNumber(commandNumber);
    }
}