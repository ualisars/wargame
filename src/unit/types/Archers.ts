import Unit from '../Unit';

class Archers extends Unit {
  // general
  description: string = 'High range skirmishers armed with bows';
  cost: number = 50;
  advantageOver: string[];

  // Characteristics
  type: string = 'skirmishers';
  health: number = 50;
  speed: number = 60;
  armour: number = 2;
  range: number = 8;
  ammunition:number =  20;
  mobility: number = 4;
  meleeDamage: number = 2;
  missileDamage: number = 7;
  charge: number = 1;
  discipline: number = 40;

  constructor(name:string, x:number, y:number, radius:number, controlBy:string='player') {
    super(name, x, y, radius, controlBy);
  }
}

export default Archers;
