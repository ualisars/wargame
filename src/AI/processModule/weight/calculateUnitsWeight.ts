import { Unit } from "../../../unit";

export const calculateTotalUnitsWeight = (units: Unit[]): number => {
    let weight = 0;
    for(let unit of units) {
        weight += unit.weight;
    }
    return weight;
}