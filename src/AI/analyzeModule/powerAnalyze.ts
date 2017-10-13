import PlayerPower from '../store/PlayerPower';
import ComputerPower from '../store/ComputerPower';
import {
  computersUnits,
  visibleForComputerUnits,
} from '../../store/unitStore';

export let playerPower = new PlayerPower;
export let computerPower = new ComputerPower;

export const calculateTotalPlayerPower = () => {
  for(let unit of visibleForComputerUnits) {
    decomposeUnitProps(unit);
  }
}

export const calculateTotalComputerPower = () => {
  for(let unit of computersUnits) {
    decomposeUnitProps(unit, 'computer');
  }
}

export const decomposeUnitProps = (unit:any, side:string='player') => {
  if(side === 'player') {
    playerPower.addHealth(unit.health);
    playerPower.addSpeed(unit.speed);
    playerPower.addArmour(unit.armour);
    playerPower.addMeleeDamage(unit.meleeDamage);
    playerPower.addMissileDamage(unit.missileDamage);
    playerPower.addDiscipline(unit.discipline);
    playerPower.addMorale(unit.morale);
    playerPower.addCondition(unit.condition);
  }
  else if(side === 'computer') {
    computerPower.addHealth(unit.health);
    computerPower.addSpeed(unit.speed);
    computerPower.addArmour(unit.armour);
    computerPower.addMeleeDamage(unit.meleeDamage);
    computerPower.addMissileDamage(unit.missileDamage);
    computerPower.addDiscipline(unit.discipline);
    computerPower.addMorale(unit.morale);
    computerPower.addCondition(unit.condition);
  }
}
