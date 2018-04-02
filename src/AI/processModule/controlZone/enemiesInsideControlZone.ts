import Unit from '../../../unit/types/Unit';

export let enemiesInsideControlZone:Unit[] = [];
export let initialCall:boolean = true;

export const updateEnemiesInsideControlZone = (newEnemies:Unit[]) => {
  enemiesInsideControlZone = newEnemies;
}

// check if new enemies came or went out from the zone
export const isNumberOfEnemiesChanged = (newEnemies:Unit[]):boolean => {
  let previousEnemies:Unit[] = Object.assign([], enemiesInsideControlZone);
  if(previousEnemies.length !== newEnemies.length) { // number changed
    return true;
  }
  // enemies number remain the same
  else if(previousEnemies.length === 0 && newEnemies.length === 0) { // remain 0
    if(initialCall) { // if function calls first time
      return true;
    } else {
      return false;
    }

  } else {
    // need to check if new enemy came in
    for(let previousEnemy of previousEnemies) {
      let found:boolean = false;
      for(let newEnemy of newEnemies) {
        if(previousEnemy.id === newEnemy.id) {
          found = true; // enemy is found
        }
      }
      if(found === false) {
        return true; // enemy not found
      }
    }
  }
  initialCall = false;
  return false;
}
