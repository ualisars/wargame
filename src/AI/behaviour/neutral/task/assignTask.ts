import{
  getUnitTypesInPercentage,
  calculateUnitTypes,
} from '../../../analyzeModule/unitAnalyze';
import {
  computerUnits,
  playerUnits
} from '../../../../store/unit/units';
import {visibleForComputerUnits} from '../../../../store/unit/visibleUnits';
import {hidingEnemies} from '../../../../store/AI/enemies/hidingEnemies';
import {combatStage} from '../../../../store/AI/stage/combatStage';
import {
  assignPatrol,
  assignExploration
} from '../../../processModule/task';


export let assignTasksForNeutral = () => {
  let numberOfUnits = computerUnits.length;
  let numberOfEnemies = playerUnits.length;
  let spottedEnemies = visibleForComputerUnits.length + hidingEnemies.length;
  let visibleEnemies = visibleForComputerUnits.length;
  let percentage = getUnitTypesInPercentage();
  let unitTypes = calculateUnitTypes();
  if(combatStage === 'exploration') {
    assignExploration(unitTypes, 60)
    .then(assignPatrol)
    .then(() => {
      for(let unit of computerUnits) {
        console.log('id', unit.id, 'name', unit.name, 'task is', unit.task);
      }
    });
  }
}
