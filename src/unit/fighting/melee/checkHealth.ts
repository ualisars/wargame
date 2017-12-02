export const checkHealth = () => {
  return new Promise(resolve => {
    for(let unit of units) {
      if(unit.health <= 0) { // unit is destroyed
        if(unit.controlBy === 'player') { // if unit is destroyed remove it from spottedUnits
          removeUnitFromSpottedUnits(unit);
          console.log('spottedUnits', spottedUnits);
        }
        if(findUnitInFightAgainst(unit).length > 0) { // if unit is figthAgainst some enemies
          for(let enemy of findUnitInFightAgainst(unit)) { // delete this unit from all enemy's fighting
            enemy.removeEnemyFromFightAgainst(unit);
          }
        }
        removeUnit(unit);
        ctx.clearRect(unit.x, unit.y, gridSize, gridSize); // remove unit from the map
      } else { // unit still alive
        isUnitFighting(unit);
        refreshment(unit);
      }
    }
    resolve();
  });
}
