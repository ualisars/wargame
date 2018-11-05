import Unit from './Unit';

class Hoplites extends Unit {
  // general
  description: string = 'Infantry armed with spears and shields';
  cost: number = 80;
  advantageOver: string[] = [
    'LightCavalry', 'HeavyCavalry'
  ];
  vulnerableAgainst: string[] = [
    'Archers', 'Peltasts'
  ];
  // Characteristics
  name: string = 'Hoplites';
  type: string = 'spearmen';
  imgSrc:string = './src/img/units/hoplites.jpg';
  health: number = 190;
  speed: number = 12;
  armour: number = 7;
  range: number = 0;
  mobility: number = 1;
  meleeDamage: number = 16;
  missileDamage: number = 0;
  charge: number = 1;
  discipline: number = 90;
  initialWeight: number = 70;
  weight = this.initialWeight;

  constructor(id:number, x:number, y:number, controlBy:string='player') {
    super(id, x, y, controlBy);
  }
}

export default Hoplites;
