import Unit from './Unit';

class Pikemen extends Unit {
  // general
  description: string = 'Infantry armed with long spears';
  cost: number = 80;
  advantageOver: string[] = [
    'HeavyCavalry', 'LightCavalry'
  ];
  vulnerableAgainst: string[] = [
    'Archers', 'Peltasts'
  ];
  // Characteristics
  name: string = 'Pikemen';
  type: string = 'spearmen';
  imgSrc:string = './src/img/units/pikemen.jpg';
  health: number = 120;
  speed: number = 10;
  armour: number = 4;
  range: number = 0;
  mobility: number = 1;
  meleeDamage: number = 24;
  missileDamage: number = 0;
  charge: number = 1;
  discipline: number = 80;
  weight: number = 90;

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    super(id, x, y, controlBy);
  }
}

export default Pikemen;
