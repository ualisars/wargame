export const warriors:any[] = [];
export let currentlyChosenWarrior:any = null;

export const assignCurrentlyChosenWarrior = (warrior:any) => {
  // check unit
  if(warrior) {
      currentlyChosenWarrior = warrior;
  } else {
    currentlyChosenWarrior = null;
  }

}
