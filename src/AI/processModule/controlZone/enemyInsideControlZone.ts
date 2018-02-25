export let enemiesInsideControlZone:any[] = [];

export const updateEnemiesInsideControlZone = (newEnemies:any[]) => {
  enemiesInsideControlZone = newEnemies;
}

// check if new enemies came or went out from the zone
export const isNumberOfEnemiesChanged = (newEnemies:any[]) => {
  let previousEnemies:any[] = Object.assign([], enemiesInsideControlZone);
  if(previousEnemies.length !== newEnemies.length) { // number changed
    return true;
  }
  // enemies number remain the same
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
  return false;
}
