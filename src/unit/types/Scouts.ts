import Unit from './Unit';

class Scouts extends Unit {
  // general
  description: string = `small and mobile band that inteded to descover the map`;
  cost: number = 20;
  advantageOver: string[];
  vulnerableAgainst: string[] = [];
  // Characteristics
  name: string = 'Scouts';
  type: string = 'scouts';
  imgSrc:string = './src/img/units/pikemen.jpg';
  health: number = 60;
  speed: number = 27;
  armour: number = 1;
  range: number = 0;
  mobility: number = 9;
  meleeDamage: number = 7;
  missileDamage: number = 0;
  charge: number = 1;
  discipline: number = 10;
  initialWeight: number = 20;
  weight: number = this.initialWeight;

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    super(id, x, y, controlBy);
  }
}

export default Scouts;
