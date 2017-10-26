import Unit from '../Unit';

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
  health: number = 50;
  speed: number = 25;
  armour: number = 2;
  range: number = 8;
  mobility: number = 4;
  meleeDamage: number = 2;
  missileDamage: number = 7;
  shotsRemained:number = 10;
  charge: number = 1;
  discipline: number = 40;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default Archers;
