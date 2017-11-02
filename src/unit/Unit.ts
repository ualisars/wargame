import {gridSize} from '../map/mapSettings';
import {map} from '../map/createMap';
import {getNodeFromMap} from '../path/drawPath';
import {isObjectEmpty} from '../utils/objUtils';

class Unit {
  id: number;
  name: string;
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  radius: number;
  moveToNodeX: number;
  moveToNodeY: number;
  currentNode: any;
  nextNode:any;
  isCurrentlyChosen: boolean = false;
  positionInUnit: number;
  controlBy: string;
  isMoving: boolean = false;
  isVisible:boolean = false;
  unitToPursue: any = null;
  isFighting: boolean = false;
  figthAgainst: any = {
    front: {},
    flank: [],
    rear: {}
  };

  // general
  description: string;
  cost: number;
  advantageOver: string[];
  vulnerableAgainst: string[];

  // Characteristics
  type: string;
  health: number = 100;
  speed: number = 10;
  armour: number = 1;
  range: number = 0;
  mobility: number = 1;
  meleeDamage: number = 1;
  missileDamage: number = 0;
  shotsRemained:number = 0;
  charge:number = 2;
  discipline: number = 5;
  visibility:number = 5;
  morale: number = 100;
  condition: number = 100;

  // AI attributes
  task:string;
  unitToProtect:any = {};
  isUnitUnderProtection:boolean = false;
  unitToHelp:any = {};
  isUnitNeedHelp:boolean = false;
  beCloseTo:any[] = [];

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.centerX = x + (gridSize / 2);
    this.centerY = y + (gridSize / 2);
    this.controlBy = controlBy;
    this.currentNode = getNodeFromMap(x, y, map);
    this.nextNode = getNodeFromMap(x, y, map);
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

  setUnitToPursueToNull() {
    this.unitToPursue = null;
  }

  setIsFightingToTrue() {
    this.isFighting = true;
  }

  setIsFightingToFalse() {
    this.isFighting = false;
  }

  removeUnitFromFlank(opponent:any) {
    for(let i = 0; i < this.figthAgainst.flank.length; ++i) {
      if(this.figthAgainst.flank[i].id === opponent.id) {
        this.figthAgainst.flank = this.figthAgainst.flank.splice(i, 1);
      }
    }
  }

  increaseCondition(value:number) {
    if(this.condition < 100) { // condition cannot be more than 100
      this.condition += value;
    }
  }

  decreaseCondition(value:number) {
    if(this.condition > 0) { // condition cannot be less than 0
      this.condition -= value;
    }

  }

  setCurrentNode(node:any) {
    this.currentNode = node;
  }

  setNextNode(node:any) {
    this.nextNode = node;
  }

  assignEnemy(enemy:any) {
    if(isObjectEmpty(this.figthAgainst.front)) { // don't have front enemy
      this.figthAgainst.front = enemy;
    } else { // unit is already have front line enemy
      let frontEnemyNode = this.figthAgainst.front.currentNode;
      let newEnemyNode = enemy.currentNode;
      let unitNode = this.currentNode;
      let frontEnemyDiffX = (unitNode.x - frontEnemyNode.x) / gridSize;
      let frontEnemyDiffY = (unitNode.y - frontEnemyNode.y) / gridSize;
      let newEnemyDiffX = (unitNode.x - newEnemyNode.x) / gridSize;
      let newEnemyDiffY = (unitNode.y - newEnemyNode.y) / gridSize;
      if(frontEnemyDiffX === -newEnemyDiffX && frontEnemyDiffY === -newEnemyDiffY) { // enemy is rear
        this.figthAgainst.rear = enemy;
      }
      else if(frontEnemyDiffX === newEnemyDiffX && frontEnemyDiffY === -newEnemyDiffY) { // enemy is rear
        this.figthAgainst.rear = enemy;
      }
      else if(frontEnemyDiffX === -newEnemyDiffX && frontEnemyDiffY === newEnemyDiffY) { // enemy is rear
        this.figthAgainst.rear = enemy;
      }
      else {
        this.figthAgainst.flank.push(enemy);
      }
    }
  }

  removeEnemyFromFightAgainst(enemy:any) {
    if(enemy.id === this.figthAgainst.front.id) {
      this.figthAgainst.front = {};
      // set another enemy as a front-line enemy
      if(this.figthAgainst.flank.length === 0) {
        if(!isObjectEmpty(this.figthAgainst.rear)) {
          this.figthAgainst.front = this.figthAgainst.rear;
        }
      } else {
        this.figthAgainst.front = this.figthAgainst.flank[0]; // change to closest enemy in future
      }
      this.arrangeFightAgainst();
    }
    else if(enemy.id === this.figthAgainst.rear.id) {
      this.figthAgainst.rear = {};
    }
    else if(this.figthAgainst.flank.length !== 0) {
      for(let unit of this.figthAgainst.flank) {
        if(unit.id === enemy.id) {
          this.removeUnitFromFlank(enemy);
        }
      }
    }
  }

  arrangeFightAgainst() {
    this.figthAgainst.flank = [];
    this.figthAgainst.rear = {};
    if(this.figthAgainst.flank !== 0) {
      for(let enemy of this.figthAgainst.flank) {
          this.assignEnemy(enemy);
      }
    }
    if(!isObjectEmpty(this.figthAgainst.rear)) {
      this.assignEnemy(this.figthAgainst.rear);
    }
  }

  clearFightAgainst() {
    this.figthAgainst.front = {};
    this.figthAgainst.rear = {};
    this.figthAgainst.flank = [];
  }

  // AI methods
  assignTask(task:string) {
    if(task === 'exploration') {
      this.task = task;
    }
    else if(task === 'protection') {
      this.task = task;
    }
    else if(task === 'flanking') {
      this.task = task;
    }
    else if(task === 'occupation') {
      this.task = task;
    }
    else if(task === 'offensive') {
      this.task = task;
    }
    else if(task === 'destruction') {
      this.task = task;
    }
    else if(task === 'defense') {
      this.task = task;
    }
    else {
      this.task = '';
    }
  }

  unitNeedProtection() {
    this.isUnitUnderProtection = true;
  }
  unitDoesntNeedProtection() {
    this.isUnitUnderProtection = false;
  }
  assignUnitToProtect(unit:any) {
    this.unitToProtect = unit;
  }
  clearUnitToProtect() {
    this.unitToProtect = {}
  }
  unitNeedHelp() {
    this.isUnitNeedHelp = true;
  }
  unitDoesntNeedHelp() {
    this.isUnitNeedHelp = false;
  }
  assignUnitToHelp(unit:any) {
    this.unitNeedHelp = unit;
  }
  clearUnitToHelp() {
    this.unitToHelp = {};
  }
}

export default Unit;
