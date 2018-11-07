import Unit from './Unit';

class Militia extends Unit {
  // general
  description: string = `A military force that is raised from the civil population to supplement a regular army in an emergency.`;
  cost: number = 20;
  advantageOver: string[] = [];
  vulnerableAgainst: string[] = [];
  // Characteristics
  name: string = 'Militia';
  type: string = 'infantry';
  imgSrc:string = './src/img/units/pikemen.jpg';
  health: number = 120;
  speed: number = 25;
  armour: number = 1;
  range: number = 0;
  mobility: number = 3;
  meleeDamage: number = 7;
  missileDamage: number = 0;
  charge: number = 1;
  discipline: number = 10;
  initialWeight: number = 30;
  weight: number = this.initialWeight;

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    super(id, x, y, controlBy);
  }
}

export default Militia;
