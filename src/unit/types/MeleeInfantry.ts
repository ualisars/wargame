import Unit from '../Unit';

class MeleeInfantry extends Unit {

  // general
  description: string = 'Frontline soldiers trained for hand-to-hand combat with their enemies';
  cost: number = 30;
  advantageOver: string[];

  // Characteristics
  type: string = 'meleeInfantry';
  health: number = 40;
  speed: number = 90;
  armour: number = 60;
  range: number = 0;
  meleeDamage: number = 20;
  missileDamage: number = 0;
  charge: number = 10;
  discipline: number = 30;
  morale: number = 40;

  constructor(name:string, x:number, y:number, radius:number, controlBy:string='player') {
    super(name, x, y, radius, controlBy);
  }
}

export default MeleeInfantry;
