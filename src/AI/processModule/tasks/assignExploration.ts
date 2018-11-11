import { calculateUnitTypes } from "../../analyzeModule/unitAnalyze";
import { getFreeUnits, getBestUnitByProperty } from "../../../utils/unit/AI";
import { computerUnits } from "../../../store/unit/units";

export const assignExplorationTask = (percentage: number = 60) => {
    const unitTypes: any = calculateUnitTypes();
    if(unitTypes.scouts === 0 && unitTypes.cavalry === 0) {
    let freeUnits = getFreeUnits();
    if(freeUnits) {
        if(freeUnits.length !== 0) {
            let fastestUnit = getBestUnitByProperty('speed'); 
            fastestUnit.assignTask('exploration');
            if(freeUnits.length > 1) {
                let exclusion = [fastestUnit];
                let secondFastestUnit = getBestUnitByProperty('speed', exclusion);
                secondFastestUnit.assignTask('exploration');
            }
        }
    }
    } 
    else {
        for(let unit of computerUnits) {
            let scouts:number = 0;
            let percentageOfScouts:number = Math.round((scouts / computerUnits.length) * 100);
            if(!unit.task && (unit.type === 'scouts' || unit.type === 'cavalry') && percentageOfScouts < percentage) {
                unit.assignTask('exploration');
            }
        }
    }
  }