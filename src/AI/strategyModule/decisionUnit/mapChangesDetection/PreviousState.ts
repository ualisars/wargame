import { Unit } from "../../../../unit";
import { playerUnits, computerUnits } from "../../../../store/unit/units";
import { calculateTotalPlayerPower, calculateTotalComputerPower } from "../../../analyzeModule/powerAnalyze";
import { visibleForPlayerUnits, visibleForComputerUnits } from "../../../../store/unit/visibleUnits";
import { hidingEnemies } from "../../../../store/AI/enemies/hidingEnemies";

class PreviousState {
    playerUnits: Unit[];
    computerUnits: Unit[];
    playerTotalHealth: number;
    computerTotalHealth: number;
    visibleForPlayerUnits: Unit[];
    visibleForComputerUnits: Unit[];
    hidingEnemies: Unit[];

    constructor() {
        let playerPower = calculateTotalPlayerPower();
        let computerPower = calculateTotalComputerPower();
        this.playerUnits = Object.assign([], playerUnits);
        this.computerUnits = Object.assign([], computerUnits);
        this.playerTotalHealth = playerPower.totalHealth;
        this.computerTotalHealth = computerPower.totalHealth;
        this.visibleForPlayerUnits = Object.assign([], visibleForPlayerUnits);
        this.visibleForComputerUnits = Object.assign([], visibleForComputerUnits);
        this.hidingEnemies = Object.assign([], hidingEnemies);
    }

    setPreviousState() {
        let playerPower = calculateTotalPlayerPower();
        let computerPower = calculateTotalComputerPower();
        this.playerUnits = Object.assign([], playerUnits);
        this.computerUnits = Object.assign([], computerUnits);
        this.playerTotalHealth = playerPower.totalHealth;
        this.computerTotalHealth = computerPower.totalHealth;
        this.visibleForPlayerUnits = Object.assign([], visibleForPlayerUnits);
        this.visibleForComputerUnits = Object.assign([], visibleForComputerUnits);
        this.hidingEnemies = Object.assign([], hidingEnemies);
    }
}

export default PreviousState;