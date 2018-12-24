import PreviousState from "./PreviousState";
import { visibleForComputerUnits } from "../../../../store/unit/visibleUnits";
import { computerUnits, playerUnits } from "../../../../store/unit/units";
import { playerPower } from "../../../../store/AI/power/playerPower";
import { computerPower } from "../../../../store/AI/power/computerPower";
import { hidingEnemies } from "../../../../store/AI/enemies/hidingEnemies";

export const needToChangePosition = (previousState: PreviousState): boolean => {
    if(visibleForComputerUnits.length != previousState.previousVisibleForComputerUnits.length) {
        return true;
    }
    else if(computerUnits.length != previousState.previousComputerUnits.length) {
        return true;
    }
    else if(playerUnits.length != previousState.previousPlayerUnits.length) {
        return true;
    }
    let playerHealthPercentage = previousState.previousPlayerTotalHealth / playerPower.totalHealth;
    if(1 - playerHealthPercentage >= 0.2) {
        return true;
    }
    let computerHealthPercentage = previousState.previousComputerTotalHealth / computerPower.totalHealth;
    if(1 - computerHealthPercentage >= 0.2) {
        return true;
    }
    if(hidingEnemies.length != previousState.previousHidingEnemies.length) {
        return true;
    }
    return false;
}