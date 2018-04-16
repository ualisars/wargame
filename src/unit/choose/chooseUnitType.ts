// unit types
import {
  Archers,
  HeavyInfantry,
  HeavyCavalry,
  Hoplites,
  LightInfantry,
  LightCavalry,
  Militia,
  Peltasts,
  Pikemen,
  Scouts
}  from '../types';
import {unitId} from '../../store/unit/unitId';
import {radius} from '../../config/unit';

export const chooseUnitType = (type:string, x:number, y:number, controlBy:string) => {
  let unit:any;
  if(type === 'archers' || type === 'Archers') {
    return new Archers(unitId, x, y, controlBy);
  }
  else if(type === 'heavyCavalry' || type === 'HeavyCavalry') {
    return new HeavyCavalry(unitId, x, y, controlBy);
  }
  else if(type === 'heavyInfantry' || type === 'HeavyInfantry') {
    return new HeavyInfantry(unitId, x, y, controlBy);
  }
  else if(type === 'hoplites' || type === 'Hoplites') {
    return new Hoplites(unitId, x, y, controlBy);
  }
  else if(type === 'lightCavalry' || type === 'LightCavalry') {
    return new LightCavalry(unitId, x, y, controlBy);
  }
  else if(type === 'lightInfantry' || type === 'LightInfantry') {
    return new LightInfantry(unitId, x, y, controlBy);
  }
  else if(type === 'militia' || type === 'Militia') {
    return new Militia(unitId, x, y, controlBy);
  }
  else if(type === 'peltasts' || type === 'Peltasts') {
    return new Peltasts(unitId, x, y, controlBy);
  }
  else if(type === 'pikemen' || type === 'Pikemen') {
    return new Pikemen(unitId, x, y, controlBy);
  }
  else if(type === 'scouts' || type === 'Scouts') {
    return new Scouts(unitId, x, y, controlBy);
  }
}
