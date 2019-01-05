import { Unit } from "../../unit";
import { createDefaultUnit } from "../../unit/create/createUnit";

export let defaultUnits: Unit[] = [];

const releasedUnitTypes = [
    "HeavyCavalry", "HeavyInfantry",
    "Hoplites", "LightCavalry", "LightInfantry",
    "Militia", "Pikemen", "Scouts"
]

export const createDefaultUnits = () => {
    return new Promise(resolve => {
        for(let type of releasedUnitTypes) {
            let unit = createDefaultUnit(type, 0, 0, "player");
            defaultUnits.push(unit);
        }
        resolve();
    });
}