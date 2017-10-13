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
  isVisible:boolean = false;
  unitToPursue: any = null;
  isFighting: boolean = false;
  figthAgainst: string[] = [];

  // general
  description: string;
  cost: number;
  advantageOver: string[];

  // Characteristics
  type: string;
  health: number = 100;
  speed: number;
  armour: number = 4;
  range: number;
  mobility: number = 3;
  meleeDamage: number = 7;
  missileDamage: number;
  discipline: number = 5;
  visibility:number = 5;
  morale: number = 100;
  condition: number = 100;


  constructor(name:string, x:number, y:number, radius:number, controlBy:string='player') {
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

  setUnitToPursue(opponentsUnit:any) {
    this.unitToPursue = opponentsUnit;
  }

  setIsFightingToTrue() {
    this.isFighting = true;
  }

  setIsFightingToFalse() {
    this.isFighting = false;
  }

  addUnitIntoFightAgainst(unitName:string, position:string='front') {
    if(position === 'front' || position === 'flank' || position === 'rear') {
      this.figthAgainst.push(unitName);
    } else {
      console.error('Position can be only front, flank or rear');
    }
  }

  removeUnitFromFightAgainst(opponent:string) {
    for(let i = 0; i < this.figthAgainst.length; ++i) {
      if(this.figthAgainst[i] === opponent) {
        this.figthAgainst = this.figthAgainst.splice(i, 1);
      }
    }
  }
}

export default Unit;
