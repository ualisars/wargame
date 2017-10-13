import Unit from '../Unit';

class LightCavalry extends Unit {
  // general
  description: string = 'Light and fast cavalry';
  cost: number = 90;
  advantageOver: string[];

  // Characteristics
  type: string = 'cavalry';
  health: number = 80;
  speed: number = 50;
  armour: number = 2;
  range: number = 0;
  mobility: number = 7;
  meleeDamage: number = 5;
  missileDamage: number = 0;
  charge: number = 4;
  discipline: number = 40;

  constructor(name:string, x:number, y:number, radius:number, controlBy:string='player') {
    super(name, x, y, radius, controlBy);
  }
}

export default LightCavalry;
