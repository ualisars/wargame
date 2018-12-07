import Unit from './Unit';

class HeavyCavalry extends Unit {
  // general
  description: string = `heavy and cavalry aimed to break through enemy's lines`;
  cost: number = 150;
  advantageOver: string[] = [
    'Archers', 'Peltasts'
  ];
  vulnerableAgainst: string[] = [
    'Pikemen', 'Hoplites'
  ];
  // Characteristics
  name: string = 'HeavyCavalry';
  type: string = 'cavalry';
  imgSrc:string = './src/img/units/pikemen.jpg';
  health: number = 150;
  speed: number = 35;
  armour: number = 8;
  range: number = 0;
  mobility: number = 5;
  meleeDamage: number = 12;
  missileDamage: number = 0;
  charge: number = 8;
  discipline: number = 70;
  initialWeight: number = 100;
  weight: number = this.initialWeight;
  initialHealth: number;

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    super(id, x, y, controlBy);
    this.initialHealth = this.health;
  }
}

export default HeavyCavalry;
