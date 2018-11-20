import { Unit } from "../../../unit";
import { calculateEfficiency } from "./calculateEfficiency";

export const calculateTotalEfficiency = (units: Unit[]): number => {
    let efficiency: number = 0;
    for(let unit of units) {
        efficiency += calculateEfficiency(unit, units);
    }
    return efficiency;
}