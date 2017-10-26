import Unit from '../Unit';

class HeavyCavalry extends Unit {
  // general
  description: string = `heavy and cavalry aimed to break through enemy's lines`;
  cost: number = 150;
  advantageOver: string[];
  vulnerableAgainst: string[];
  // Characteristics
  name: string = 'HeavyCavalry';
  type: string = 'cavalry';
  health: number = 90;
  speed: number = 35;
  armour: number = 8;
  range: number = 0;
  mobility: number = 5;
  meleeDamage: number = 12;
  missileDamage: number = 0;
  charge: number = 8;
  discipline: number = 70;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default HeavyCavalry;
