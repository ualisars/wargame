import {gridSize} from '../map/mapConfig';

class Unit {
  name: string;
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  radius: number;
  moveToNodeX: number;
  moveToNodeY: number;
  isCurrentlyChosen: boolean = false;
  positionInUnit: number;
  color: string;

  constructor(name:string, x:number, y:number, radius:number, color:string) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.centerX = x + (gridSize / 2);
    this.centerY = y + (gridSize / 2);
    this.color = color;
  }

  setX(x:number) {
    this.x = x;
    this.centerX = x + (gridSize / 2);
  }

  setY(y:number) {
    this.y = y;
    this.centerY = y + (gridSize / 2);
  }

  assignPosition(newPosition: number) {
    this.positionInUnit = newPosition;
  }
}

export default Unit;
