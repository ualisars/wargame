import Unit from '../Unit';

class Scouts extends Unit {
  // general
  description: string = `small and mobile band that inteded to descover the map`;
  cost: number = 20;
  advantageOver: string[];

  // Characteristics
  name: string = 'Scouts';
  type: string = 'scouts';
  health: number = 20;
  speed: number = 20;
  armour: number = 1;
  range: number = 0;
  mobility: number = 9;
  meleeDamage: number = 2;
  missileDamage: number = 0;
  charge: number = 1;
  discipline: number = 10;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default Scouts;
