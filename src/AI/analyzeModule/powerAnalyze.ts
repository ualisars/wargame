import PlayerPower from '../store/playerPower';
import {
  computersUnits,
  visibleForComputerUnits,
} from '../../store/unitStore';

export let playerPower = new PlayerPower;

export const analyzePlayerPower = () => {
  for(let unit of visibleForComputerUnits) {
    decomposeUnitProps(unit);
  }
}

export const analyzeComputerPower = () => {
  for(let unit of computersUnits) {
    decomposeUnitProps(unit);
  }
}

export const decomposeUnitProps = (unit:any) => {
  playerPower.addHealth(unit.health);
  playerPower.addSpeed(unit.speed);
  playerPower.addArmour(unit.armour);
  playerPower.addMeleeDamage(unit.meleeDamage);
  playerPower.addMissileDamage(unit.missileDamage);
  playerPower.addDiscipline(unit.discipline);
  playerPower.addMorale(unit.morale);
  playerPower.addCondition(unit.condition);
}
