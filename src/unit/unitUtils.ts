export const getClosestWarriorToDestination = (unit:any, destX:number, destY:number) => {
  let closest = 0;
  let difference:number;
  let warriors = unit.warriors;
  for(let i = 1; i <= warriors.length - 1; ++i) {
    let currentUnitDifference = Math.sqrt(Math.pow(Math.abs(warriors[i].x - destX), 2) + Math.pow(Math.abs(warriors[i].y - destY), 2));
    let previousUnitDifference = Math.sqrt(Math.pow(Math.abs(warriors[closest].x - destX), 2) + Math.pow(Math.abs(warriors[closest].y - destY), 2));

    if(currentUnitDifference < previousUnitDifference) {
      closest = i;
    }
  }
  return warriors[closest];
}

 // get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngleInDegrees = (unit:any, destX:number, destY:number):number => {
  //console.error('calcDestinationAngleInDegrees');
  let warrior = getClosestWarriorToDestination(unit, destX, destY);
  let angle;
  let a = Math.abs(destY - warrior.y);
  let b = Math.abs(destX - warrior.x);
  let angleInRadian = Math.atan(a / b);
  // check quater of the circle
  let degree =  angleInRadian * (180 / Math.PI); // convert radians into degree
  let quater = getQuater(warrior.x, warrior.y, destX, destY); // check quater
  if(quater === 1) angle = degree;
  if(quater === 2) angle = 90 + (90 - degree);
  else if(quater === 3) angle = 180 + degree;
  else if(quater === 4) angle = 270 + (90 - degree);
  return Math.round(angle);
}

export const getQuater = (unitX:number, unitY:number, destX:number, destY:number):number => {
  //console.error('getQuater');
  let quater;
  if(destX >= unitX && destY < unitY) {
    quater = 1;
  }
  else if(destX < unitX && destY <= unitY) {
    quater = 2;
  }
  else if(destX <= unitX && destY > unitY) {
    quater = 3;
  }
  else if(destX > unitX && destY >= unitY) {
    quater = 4;
  }
  return quater;
}
