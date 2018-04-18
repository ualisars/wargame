import {
  onChooseUnit,
  chooseUnitType
} from './choose';
import {
  createUnit
} from './create';
import {
  drawUnitImage,
  drawUnit,
  redrawUnits
} from './draw';
import {
  armourPenetration,
  checkAttackSide,
  charge,
  calculateCharge,
  calculateDamage,
  calculateDamageBaseOnEnemyPosition,
  calculateDamageWhenItsLessThanOne,
  removeUnitFromEnemiesFightAgainst,
  findUnitInFightAgainst,
  isUnitFighting,
  checkHealth,
  meleeAttack,
  meleeCombat,
  refreshment
} from './fighting';
import {
  updateUnit,
  pursueUnit
} from './movement';
import {
  spotEnemy,
  isUnitSpottedByEnemy,
  spotUnits
} from './spotting';
import {
  Archers,
  HeavyInfantry,
  HeavyCavalry,
  Hoplites,
  LightInfantry,
  LightCavalry,
  Militia,
  Peltasts,
  Pikemen,
  Scouts,
  Unit
} from './types';

export {
  onChooseUnit,
  chooseUnitType,
  createUnit,
  drawUnitImage,
  drawUnit,
  redrawUnits,
  armourPenetration,
  checkAttackSide,
  charge,
  calculateCharge,
  calculateDamage,
  calculateDamageBaseOnEnemyPosition,
  calculateDamageWhenItsLessThanOne,
  removeUnitFromEnemiesFightAgainst,
  findUnitInFightAgainst,
  isUnitFighting,
  checkHealth,
  meleeAttack,
  meleeCombat,
  refreshment,
  updateUnit,
  pursueUnit,
  spotEnemy,
  isUnitSpottedByEnemy,
  spotUnits,
  Archers,
  HeavyInfantry,
  HeavyCavalry,
  Hoplites,
  LightInfantry,
  LightCavalry,
  Militia,
  Peltasts,
  Pikemen,
  Scouts,
  Unit
}
