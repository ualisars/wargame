import {getUnitTypesInPercentage} from '../analyzeModule/unitAnalyze';

/*
  formations:
  1. Heavy infantry and skirmishers - center, cavalry and light infantry - flank
  2. Light infantry and skirmishers -  center, cavalry and heavy infantry - flank
  3. Heavy infantry - center, light infantry, skirmishers and cavalry flank
  4. Divide roster into two waves
  5. Cavalry try to destroy skirmishers and moved separately
*/
export const chooseFormation = ():any => {
  let formation;
  let behaviour = 'neutral';
  let percentage = getUnitTypesInPercentage();
  if(behaviour === 'neutral') {
    formation = neutralFormations(percentage);
  }
  return formation;
}

export const neutralFormations = (percentage:any) => {
  let formation:any = {
    heavyInfantry: 'center',
    lightInfantry: 'center',
    cavalry: 'center',
    skirmishers: 'center',
    long: false,
    short: false,
    waves: 0,
    cavalryFlank: 'both',
    heavyInfantryFlank: 'center',
    lightInfantryFlank: 'center',
    skirmishersFlank: 'center',
  };
  if(percentage.infantry >= 90 && percentage.heavyInfantry >= 40 && percentage.lightInfantry >= 40) {
    return {
      heavyInfantry: 'center',
      lightInfantry: 'center',
      cavalry: 'flank',
      skirmishers: 'center',
      short: true,
      long: false,
      waves: ['heavyInfantry', 'lightInfantry'],
      cavalryFlank: 'both',
      heavyInfantryFlank: 'center',
      lightInfantryFlank: 'center',
      skirmishersFlank: 'center',
    }
  }
  else if(percentage.infantry >= 90 && percentage.heavyInfantry >= 80 || percentage.lightInfantry >= 40) {
    return {
      heavyInfantry: 'center',
      lightInfantry: 'center',
      cavalry: 'flank',
      skirmishers: 'center',
      short: false,
      long: true,
      waves: [],
      cavalryFlank: 'both',
      heavyInfantryFlank: 'center',
      lightInfantryFlank: 'center',
      skirmishersFlank: 'center',
    }
  }
  else if(percentage.infantry >= 50) { // computer roster consist mostly of infantry
    if(percentage.heavyInfantry + percentage.spearmen >= 60) {
      return {
        heavyInfantry: 'flank',
        lightInfantry: 'center',
        cavalry: 'flank',
        skirmishers: 'center',
        short: false,
        long: true,
        waves: [],
        cavalryFlank: 'both',
        heavyInfantryFlank: 'center',
        lightInfantryFlank: 'center',
        skirmishersFlank: 'center',
      }
    }
    if(percentage.heavyInfantry + percentage.spearmen >= 40) {
      return {
        heavyInfantry: 'center',
        lightInfantry: 'flank',
        cavalry: 'flank',
        skirmishers: 'flank',
        short: false,
        long: true,
        waves: [],
        cavalryFlank: 'both',
        heavyInfantryFlank: 'center',
        lightInfantryFlank: 'center',
        skirmishersFlank: 'center',
      }
    }
    if(percentage.heavyInfantry + percentage.spearmen < 40) {
      let random = Math.random();
      if(random >= 0 && random < 4) {
        return {
          heavyInfantry: 'center',
          lightInfantry: 'flank',
          cavalry: 'flank',
          skirmishers: 'flank',
          short: false,
          long: true,
          waves: [],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'center',
          lightInfantryFlank: 'center',
          skirmishersFlank: 'center',
        }
      }
      else if(random >= 4 && random < 7) {
        return {
          heavyInfantry: 'center',
          lightInfantry: 'center',
          cavalry: 'flank',
          skirmishers: 'center',
          short: true,
          long: false,
          waves: ['heavyInfantry', 'lightInfantry'],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'center',
          lightInfantryFlank: 'center',
          skirmishersFlank: 'center',
        }
      }
      else {
        return {
          heavyInfantry: 'center',
          lightInfantry: 'center',
          cavalry: 'flank',
          skirmishers: 'center',
          short: true,
          long: false,
          waves: [],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'center',
          lightInfantryFlank: 'center',
          skirmishersFlank: 'center',
        }
      }
    }
  } // percentage infantry >= 70
  else if(percentage.infantry >= 40) {
    if(percentage.cavalry >= 40) {
      return {
        heavyInfantry: 'center',
        lightInfantry: 'center',
        cavalry: 'flank',
        skirmishers: 'flank',
        short: true,
        long: false,
        waves: [],
        cavalryFlank: 'both',
        heavyInfantryFlank: 'center',
        lightInfantryFlank: 'center',
        skirmishersFlank: 'center',
      }
    }
    if(percentage.skirmishers >= 30) {
      let random = Math.random();
      if(random >= 0 && random < 3) {
        return {
          heavyInfantry: 'flank',
          lightInfantry: 'flank',
          cavalry: 'flank',
          skirmishers: 'flank',
          short: false,
          long: true,
          waves: [],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'both',
          lightInfantryFlank: 'both',
          skirmishersFlank: 'both',
        }
      }
      else if(random >= 3 && random < 8) {
        return {
          heavyInfantry: 'center',
          lightInfantry: 'center',
          cavalry: 'center',
          skirmishers: 'center',
          short: true,
          long: false,
          waves: [],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'center',
          lightInfantryFlank: 'center',
          skirmishersFlank: 'center',
        }
      }
      else if(random >= 8 && random < 9) {
        return {
          heavyInfantry: 'center',
          lightInfantry: 'center',
          cavalry: 'center',
          skirmishers: 'center',
          short: true,
          long: false,
          waves: [],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'center',
          lightInfantryFlank: 'center',
          skirmishersFlank: 'right',
        }
      }
      else if(random >= 9) {
        return {
          heavyInfantry: 'center',
          lightInfantry: 'center',
          cavalry: 'center',
          skirmishers: 'center',
          short: false,
          long: true,
          waves: [],
          cavalryFlank: 'both',
          heavyInfantryFlank: 'center',
          lightInfantryFlank: 'center',
          skirmishersFlank: 'left',
        }
      }

    }
  } // infantry percentage >= 40
  if(percentage.infantry < 40) {
      return {
        heavyInfantry: 'center',
        lightInfantry: 'center',
        cavalry: 'flank',
        skirmishers: 'center',
        short: true,
        long: false,
        waves: [],
        cavalryFlank: 'both',
        heavyInfantryFlank: 'center',
        lightInfantryFlank: 'center',
        skirmishersFlank: 'center',
      }
  }
  return formation;
}
