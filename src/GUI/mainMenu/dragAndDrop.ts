import {
  mainMenu,
  mainMenuCtx
} from './mainMenuSettings';

import {
  roster,
  selectUnitInRoster,
  selectedUnitInRoster
} from './units';
import {
  rosterImgWidth,
  rosterImgHeight
} from './unitRoster';

export const dragAndDrop = () => {
  mainMenu.addEventListener('click', (e:any) => {
    console.error('Click');
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    onChooseRoster(x, y);
  });

  mainMenu.addEventListener('mousemove', (e:any) => {
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y

  });
}

export let onChooseRoster = (mouseX:number, mouseY:number) => {
  let selectedUnit = null;
  const width = rosterImgWidth;
  const height = rosterImgHeight;
  for(let unit of roster) {
    let x = unit.x;
    let y = unit.y;
    if(mouseX >= x && mouseX < x + width && mouseY >= y && mouseY < y + height) {
      selectedUnit = unit;
    }
  }
  selectUnitInRoster(selectedUnit);
  console.error('selectedUnitInRoster:', selectedUnitInRoster);
}
