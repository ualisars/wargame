import Unit from './Unit';

class Archers extends Unit {
  // general
  description: string = 'High range skirmishers armed with bows';
  cost: number = 50;
  advantageOver: string[] = [
    'Pikemen', 'Hoplites'
  ];
  vulnerableAgainst: string[] = [
    'LightCavalry', 'HeavyCavalry'
  ];
  // Characteristics
  name: string = 'Archers';
  type: string = 'skirmishers';
  imgSrc:string = './src/img/units/pikemen.jpg';
  health: number = 25;
  speed: number = 25;
  armour: number = 2;
  range: number = 8;
  mobility: number = 4;
  meleeDamage: number = 7;
  missileDamage: number = 7;
  shotsRemained:number = 10;
  charge: number = 1;
  discipline: number = 40;
  weight: number = 20;
  initialHealth: number;

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    super(id, x, y, controlBy);
    this.initialHealth = this.health;
  }
}

export default Archers;
