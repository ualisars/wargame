import {
  ctx,
  gridSize
} from '../map/mapConfig';

export const missileAttack = () => {

}

/*
  Check the distance between shooting unit and
  the enemy and if distance less than shooting unit
  range return true, mean enemy is reacheable for missileAttack
*/
export const isEnemyInTheRange = (unit:any, enemy:any) => {
  let range = unit.range;
  let distanceX:number = ((unit.currentNode.x - enemy.currentNode.x) / gridSize);
  let distanceY:number = ((unit.currentNode.y - enemy.currentNode.y) / gridSize);
  let distance:number = Math.max(distanceX, distanceY); // get min distance
  if(distance <= range) { // enemy is reacheable for missileAttack
    console.log('enemy is reacheable for missileAttack');
    return true;
  }
  return false;
}
