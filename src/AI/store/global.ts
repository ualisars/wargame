export let formation:any = {};
export let combatStage:string = 'exploration';

export const changeFormation = (newFormation:any) => {
  formation = newFormation;
  console.error('formation:', formation);
}

export const changeCombatStage = (newCombatStage:string) => {
  combatStage = newCombatStage;
  console.error('combatStage:', combatStage);
}
