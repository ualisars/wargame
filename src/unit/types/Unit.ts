import {gridSize} from '../../config';
import {
  isObjectEmpty,
  getNodeFromMap
} from '../../utils';
import {
  deleteUnitFromArray
} from '../../utils/unit/utils';
import {radius} from '../../config/unit';

class Unit {
  id: number;
  name: string;
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  radius: number = radius;
  moveToNode:any;
  currentNode: any;
  nextNode:any;
  isCurrentlyChosen: boolean = false;
  controlBy: string;
  imgSrc: string = './src/img/units/pikemen.jpg';
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
  position:string; // position in formation
  task:string;
  unitToProtect:any = {};
  baseNode:any = {};
  isUnitUnderProtection:boolean = false;
  unitToHelp:any = {};
  isUnitNeedHelp:boolean = false;
  beCloseTo:any[] = [];
  frozen:boolean = false; // to prevent too many orders in short period of time

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    this.id = id;
    this.x = x;
    this.y = y;
    this.centerX = x + (gridSize / 2);
    this.centerY = y + (gridSize / 2);
    this.controlBy = controlBy;
    this.currentNode = getNodeFromMap(x, y);
    this.nextNode = getNodeFromMap(x, y);
  }

  setX(x:number) {
    this.x = x;
    this.centerX = x + (gridSize / 2);
  }

  setY(y:number) {
    this.y = y;
    this.centerY = y + (gridSize / 2);
  }

  setIsMovingToFalse() {
    this.isMoving = false;
  }

  setIsMovingToTrue() {
    this.isMoving = true;
  }

  setUnitToPursue(opponentsUnit:Unit) {
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

  assignMoveToPosition(x:number, y:number) {
    let node:any = getNodeFromMap(x, y);
    if(node) {
      this.moveToNode = node;
      console.log(this.name + ' is moving to node:' + node.x + ' y:' + node.y);
    }

  }

  removeEnemyFromFlank(opponent:Unit) {
    for(let i = 0; i < this.figthAgainst.flank.length; ++i) {
      if(this.figthAgainst.flank[i].id === opponent.id) {
        this.figthAgainst.flank = deleteUnitFromArray(opponent, this.figthAgainst.flank);
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
    let foundNode:any = getNodeFromMap(node.x, node.y);
    if(foundNode) {
      this.currentNode = foundNode;
    } else {
      throw 'Error: Node not found in the map';
    }
  }

  setNextNode(node:any) {
    let foundNode:any = getNodeFromMap(node.x, node.y);
    if(foundNode) {
      this.nextNode = foundNode;
    } else {
      throw 'Error: Node not found in the map';
    }
  }

  assignEnemy(enemy:Unit) {
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

  removeEnemyFromFightAgainst(enemy:Unit) {
    console.log('removeEnemyFromFightAgainst');
    if(enemy.id === this.figthAgainst.front.id) {
      this.figthAgainst.front = {};
      this.arrangeFightAgainst();
    }

    else if(enemy.id === this.figthAgainst.rear.id) {
      this.figthAgainst.rear = {};
    }

    else if(this.figthAgainst.flank.length !== 0) {
      for(let unit of this.figthAgainst.flank) {
        if(unit.id === enemy.id) {
          this.removeEnemyFromFlank(enemy);
        }
      }
    }
  }

  arrangeFightAgainst() {
    // copy flank and rear units
    let updatedFlank:Unit[] = Object.assign([], this.figthAgainst.flank);
    let updatedRear:Unit = Object.assign({}, this.figthAgainst.rear);

    // clear fight against
    this.figthAgainst.flank = [];
    this.figthAgainst.rear = {};

    if(updatedFlank.length > 0) {
      for(let enemy of updatedFlank) {
          this.assignEnemy(enemy);
      }
    }
    if(!isObjectEmpty(updatedRear)) {
      this.assignEnemy(updatedRear);
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
    else if(task === 'patrol') {
      this.task = task;
    }
    else if(task === 'holdPosition') {
      this.task = task;
    }
    else {
      throw new Error('Cannot assign task for unit ' + this.name);
    }
    console.error(' new task for unit', this.name, 'is', task);
  }

  clearTask() {
    this.task = '';
  }

  setIsUnitUnderProtectionToTrue() {
    this.isUnitUnderProtection = true;
  }
  setIsUnitUnderProtectionToFalse() {
    this.isUnitUnderProtection = false;
  }
  assignUnitToProtect(unit:Unit) {
    this.unitToProtect = unit;
  }
  clearUnitToProtect() {
    this.unitToProtect = {}
  }
  setIsUnitNeedHelpToTrue() {
    this.isUnitNeedHelp = true;
  }
  setIsUnitNeedHelpToFalse() {
    this.isUnitNeedHelp = false;
  }
  assignUnitToHelp(unit:any) {
    this.unitToHelp = unit;
  }
  clearUnitToHelp() {
    this.unitToHelp = {};
  }
  assignBaseNode(node:any) {
    if(node) {
      this.baseNode = node;
    }
  }
  removeBaseNode() {
    this.baseNode = {};
  }
}

export default Unit;
