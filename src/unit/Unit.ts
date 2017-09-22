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
  controlBy: string;
  isMoving: boolean = false;
  unitToPursue: any = null;

  // general
  description: string;
  cost: number;
  advantageOver: string[];

  // Characteristics
  type: string;
  health: number;
  speed: number;
  armour: number;
  range: number;
  meleeDamage: number;
  missileDamage: number;
  charge: number;
  discipline: number;
  morale: number;
  condition: number = 100;


  constructor(name:string, x:number, y:number, radius:number, controlBy:string) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.centerX = x + (gridSize / 2);
    this.centerY = y + (gridSize / 2);
    this.controlBy = controlBy;
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

  setIsMovingToFalse() {
    this.isMoving = false;
  }

  setIsMovingToTrue() {
    this.isMoving = true;
  }

  setUnitToPursue(oponentsUnit:any) {
    this.unitToPursue = oponentsUnit;
  }
}

export default Unit;
