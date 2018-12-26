import PreviousState from "./PreviousState";
import { visibleForComputerUnits } from "../../../../store/unit/visibleUnits";
import { computerUnits, playerUnits } from "../../../../store/unit/units";
import { playerPower } from "../../../../store/AI/power/playerPower";
import { computerPower } from "../../../../store/AI/power/computerPower";
import { hidingEnemies } from "../../../../store/AI/enemies/hidingEnemies";
import { isUnitsChanged, getFightingUnits } from "../../../../utils/unit/AI/AI_actions";

export const needToChangePosition = (previousState: PreviousState): boolean => {
    if(isUnitsChanged(visibleForComputerUnits, previousState.visibleForComputerUnits)) {
        return true;
    }
    else if(computerUnits.length != previousState.computerUnits.length) {
        return true;
    }
    else if(playerUnits.length != previousState.playerUnits.length) {
        return true;
    }
    let playerHealthPercentage = previousState.playerTotalHealth / playerPower.totalHealth;
    if(1 - playerHealthPercentage >= 0.2) {
        return true;
    }
    let computerHealthPercentage = previousState.computerTotalHealth / computerPower.totalHealth;
    if(1 - computerHealthPercentage >= 0.2) {
        return true;
    }
    if(isUnitsChanged(hidingEnemies, previousState.hidingEnemies)) {
        return true;
    }
    if(isUnitsChanged(getFightingUnits(computerUnits), getFightingUnits(previousState.computerUnits))) {
        return true;
    }
    return false;
}