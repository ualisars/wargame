import Unit from '../Unit';

class LightInfantry extends Unit {
  // general
  description: string = 'Frontline soldiers trained for hand-to-hand combat with their enemies';
  cost: number = 30;
  advantageOver: string[];
  vulnerableAgainst: string[] = [];
  // Characteristics
  name: string = 'LightInfantry';
  type: string = 'infantry';
  imgSrc:string = './src/img/units/pikemen.jpg';
  health: number = 40;
  speed: number = 22;
  armour: number = 2;
  range: number = 0;
  mobility: number = 5;
  meleeDamage: number = 6;
  missileDamage: number = 0;
  charge: number = 2;
  discipline: number = 30;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default LightInfantry;
