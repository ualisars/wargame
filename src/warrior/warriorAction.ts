import {gridSize} from '../map/mapConfig';
import {
  warriors,
  currentlyChosenWarrior,
  assignCurrentlyChosenWarrior
} from '../store/warriorStore';
import {ctx} from '../map/mapConfig';
import Warrior from './Warrior';

export const onChooseWarrior = (warriors:any[], mouseX:number, mouseY:number) => {
  let foundedWarrior = null;
  for(let warrior of warriors) {
    let bottomRightX = warrior.x + gridSize;
    let bottomRightY = warrior.y + gridSize;
    if(mouseX >= warrior.x && mouseX < bottomRightX && mouseY >= warrior.y && mouseY < bottomRightY) {
      console.log('warrior', warrior.name, ' was chosen');
      warrior.isCurrentlyChosen = true;
      foundedWarrior = warrior;
    }
  }
  assignCurrentlyChosenWarrior(foundedWarrior);
  console.log('currentlyChosenWarrior', currentlyChosenWarrior);
}

export const drawWarrior = (warrior:any) => {
    ctx.beginPath();
    ctx.arc(warrior.centerX, warrior.centerY, warrior.radius, 0, Math.PI*2);
    ctx.fillStyle = '#d92510';
    ctx.fill();
    ctx.closePath();
}

export const assignWarriorMoveToPosition = (warrior:any, x:number, y:number) => {
  //console.error('assignMoveToPosition');
  if(warrior) {
    warrior.moveToNodeX = x;
    warrior.moveToNodeY = y;
    console.log(warrior.name + ' is moving to node:' + warrior.moveToNodeX + ' y:' + warrior.moveToNodeY);
  } else {
    console.log('warrior not chosen');
  }
}

// create Unit and immediatly push it into units array
export let createWarrior = (name:string, x:number, y:number, radius:number) => {
  //console.error('createUnit');
  let warrior = new Warrior(name, x, y, radius);
  warriors.push(warrior);
  drawWarrior(warrior);
  return warrior;
}
