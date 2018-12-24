import PreviousState from "../decisionUnit/mapChangesDetection/PreviousState";
import { needToChangePosition } from "../decisionUnit/mapChangesDetection/changePositionDetection";
import { moveUnits } from "./moveUnits";
import { calculateTotalPower } from "../../analyzeModule/powerAnalyze";

export const computerAction = () => {
    moveUnits();
    let previousState = new PreviousState();
    calculateTotalPower();
    setTimeout(() => {
        if(needToChangePosition(previousState)) {
            console.error('Need to change position');
            moveUnits();
        }
        previousState.setPreviousState();
        computerAction();
    }, 600);
}