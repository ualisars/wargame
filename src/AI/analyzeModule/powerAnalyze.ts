import PlayerPower from '../store/playerPower';

export let playerPower = new PlayerPower;

export const analyzePlayerPower = (playerUnits:any[]) => {
  for(let unit of playerUnits) {
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
