import Unit from '../Unit';

class HeavyInfantry extends Unit {
  // general
  description: string = 'Heavily armed infantry trained to mount frontal assaults';
  cost: number = 70;
  advantageOver: string[] = [
    'LightInfantry', 'Militia'
  ];
  vulnerableAgainst: string[] = [];
  // Characteristics
  name: string = 'HeavyInfantry';
  type: string = 'infantry';
  health: number = 70;
  speed: number = 18;
  armour: number = 8;
  range: number = 0;
  mobility: number = 3;
  meleeDamage: number = 12;
  missileDamage: number = 0;
  charge: number = 4;
  discipline: number = 70;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default HeavyInfantry;
