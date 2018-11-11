import { Unit } from "../../../unit";
import { shuffleUnits } from "../shuffle";

export const getRandomUnit = (units: Unit[]) => {
    let updatedUnits: Unit[] = Object.assign([], units);
    const shuffledUnits: Unit[] = shuffleUnits(updatedUnits);
    return shuffledUnits[0];
}