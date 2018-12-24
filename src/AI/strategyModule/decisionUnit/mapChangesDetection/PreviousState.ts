import { Unit } from "../../../../unit";
import { playerUnits, computerUnits } from "../../../../store/unit/units";
import { calculateTotalPlayerPower, calculateTotalComputerPower } from "../../../analyzeModule/powerAnalyze";
import { visibleForPlayerUnits, visibleForComputerUnits } from "../../../../store/unit/visibleUnits";
import { hidingEnemies } from "../../../../store/AI/enemies/hidingEnemies";

class PreviousState {
    previousPlayerUnits: Unit[];
    previousComputerUnits: Unit[];
    previousPlayerTotalHealth: number;
    previousComputerTotalHealth: number;
    previousVisibleForPlayerUnits: Unit[];
    previousVisibleForComputerUnits: Unit[];
    previousHidingEnemies: Unit[];

    constructor() {
        let playerPower = calculateTotalPlayerPower();
        let computerPower = calculateTotalComputerPower();
        this.previousPlayerUnits = Object.assign([], playerUnits);
        this.previousComputerUnits = Object.assign([], computerUnits);
        this.previousPlayerTotalHealth = playerPower.totalHealth;
        this.previousComputerTotalHealth = computerPower.totalHealth;
        this.previousVisibleForPlayerUnits = Object.assign([], visibleForPlayerUnits);
        this.previousVisibleForComputerUnits = Object.assign([], visibleForComputerUnits);
        this.previousHidingEnemies = Object.assign([], hidingEnemies);
    }

    setPreviousState() {
        let playerPower = calculateTotalPlayerPower();
        let computerPower = calculateTotalComputerPower();
        this.previousPlayerUnits = Object.assign([], playerUnits);
        this.previousComputerUnits = Object.assign([], computerUnits);
        this.previousPlayerTotalHealth = playerPower.totalHealth;
        this.previousComputerTotalHealth = computerPower.totalHealth;
        this.previousVisibleForPlayerUnits = Object.assign([], visibleForPlayerUnits);
        this.previousVisibleForComputerUnits = Object.assign([], visibleForComputerUnits);
        this.previousHidingEnemies = Object.assign([], hidingEnemies);
    }
}

export default PreviousState;