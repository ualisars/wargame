import {
  currentlyChosenUnit,
  assignCurrentlyChosenUnit,
  addUnitToSpottedUnits,
  spottedUnits,
  removeUnitFromSpottedUnits,
  incUnitId,
  unitId,
  computerUnits,
  playerUnits,
  removeUnit,
  units,
  addUnitIntoVisibleArray,
  removeUnitFromVisibleArray,
  visibleForComputerUnits,
  visibleForPlayerUnits
} from './unit';

import {combatStage} from './AI/combatStage';
import {formation} from './AI/formation';
import {hidedEnemies} from './AI/hidedEnemies';

import {computerPower} from './AI/power/computerPower';
import {playerPower} from './AI/power/playerPower';
import {initialComputerPower} from './AI/power/initialComputerPower';
import {initialPlayerPower} from './AI/power/initialPlayerPower';
import {visiblePlayerUnitsPower} from './AI/power/visiblePlayerUnitsPower';


export {
  currentlyChosenUnit,
  assignCurrentlyChosenUnit,
  addUnitToSpottedUnits,
  spottedUnits,
  removeUnitFromSpottedUnits,
  incUnitId,
  unitId,
  computerUnits,
  playerUnits,
  removeUnit,
  units,
  addUnitIntoVisibleArray,
  removeUnitFromVisibleArray,
  visibleForComputerUnits,
  visibleForPlayerUnits,
  combatStage,
  formation,
  hidedEnemies,
  computerPower,
  playerPower,
  initialComputerPower,
  initialPlayerPower,
  visiblePlayerUnitsPower
}
