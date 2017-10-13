import Unit from '../Unit';

class Peltasts extends Unit {
  // general
  description: string = 'Low range skirmishers armed with javelins';
  cost: number = 50;
  advantageOver: string[];

  // Characteristics
  name: string = 'Peltasts';
  type: string = 'skirmishers';
  health: number = 50;
  speed: number = 70;
  armour: number = 4;
  range: number = 3;
  ammunition:number =  10;
  mobility: number = 6;
  meleeDamage: number = 4;
  missileDamage: number = 12;
  charge: number = 1;
  discipline: number = 50;

  constructor(id:number, x:number, y:number, radius:number, controlBy:string='player') {
    super(id, x, y, radius, controlBy);
  }
}

export default Peltasts;
