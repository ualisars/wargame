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
  units,
  addUnitIntoVisibleUnits,
  removeUnitFromVisibleUnits,
  visibleForComputerUnits,
  visibleForPlayerUnits
} from './unit';

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
  units,
  addUnitIntoVisibleUnits,
  removeUnitFromVisibleUnits,
  visibleForComputerUnits,
  visibleForPlayerUnits,
  computerPower,
  playerPower,
  initialComputerPower,
  initialPlayerPower,
  visiblePlayerUnitsPower
}
