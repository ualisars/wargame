import {mainMenuCtx} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {titleHeight} from './title';
import {roster} from './units';
import {loadImage} from '../../utils/loadImage';

export const rosterWidth = Math.round(WIDTH / 3);
export const rosterHeight = HEIGHT - 100;



export const displayRoster = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(0,0, rosterWidth, rosterHeight);
  displayRosterTitle();
}

const displayRosterTitle = () => {
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Roster', 150, titleHeight + 20);
  console.log('roster', roster);
  displayRosterUnits();
}

const displayRosterUnits = (i:number = 0, x:number=20, y:number=titleHeight+60) => {
  if(i >= roster.length) {
    return;
  }
  const imgWidth:number = 90;
  const imgHeight:number = 90;
  loadImage(roster[i].imgSrc, (err:any, img:any) => {
    mainMenuCtx.font = '14px serif';
    mainMenuCtx.fillStyle = '#000';
    mainMenuCtx.textAlign = 'left';
    mainMenuCtx.fillText(roster[i].name, x + 5, y);
    mainMenuCtx.drawImage(img, x, y + 5, imgWidth, imgHeight);
    x = (x + imgWidth + 15);
    if(i === 2 || i === 5 || i === 8 || i === 11) {
      x = 20;
      y += imgHeight + 25;
    }
    i++;
    displayRosterUnits(i, x, y);
  });
}
