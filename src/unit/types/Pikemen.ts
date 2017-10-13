import Unit from '../Unit';

class Pikemen extends Unit {
  // general
  description: string = 'Infantry armed with long spears';
  cost: number = 80;
  advantageOver: string[];

  // Characteristics
  name: string = 'Pikemen';
  type: string = 'spearmen';
  health: number = 120;
  speed: number = 2;
  armour: number = 4;
  range: number = 0;
  mobility: number = 1;
  meleeDamage: number = 24;
  missileDamage: number = 0;
  charge: number = 1;
  discipline: number = 80;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default Pikemen;