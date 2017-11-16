import {
  mainMenuCtx,
  unitRosterWidth,
  unitRosterHeight,
  titleHeight,
} from './mainMenuSettings';
import {WIDTH, HEIGHT} from '../../map/mapSettings';
import {roster} from './units';
import {loadImage} from '../../utils/loadImage';

export const rosterImgWidth:number = 80;
export const rosterImgHeight:number = 80;


export const displayRoster = () => {
  mainMenuCtx.fillStyle = '#cdd1d6';
  mainMenuCtx.fillRect(0,titleHeight, unitRosterWidth, unitRosterHeight);
  displayRosterTitle();
}

const displayRosterTitle = () => {
  mainMenuCtx.fillStyle =  '#000';
  mainMenuCtx.font = '24px serif';
  mainMenuCtx.textAlign = 'left';
  mainMenuCtx.fillText('Roster', 150, titleHeight + 20);
  //console.log('roster', roster);
  displayRosterUnits();
}

const displayRosterUnits = (i:number = 0, x:number=60, y:number=titleHeight+60) => {
  if(i >= roster.length) {
    return;
  }
  loadImage(roster[i].imgSrc, (err:any, img:any) => {
    mainMenuCtx.font = '14px serif';
    mainMenuCtx.fillStyle = '#000';
    mainMenuCtx.textAlign = 'left';
    mainMenuCtx.fillText(roster[i].name, x + 5, y);
    mainMenuCtx.drawImage(img, x, y + 5, rosterImgWidth, rosterImgHeight);
    drawCoin(x + 15, y + rosterImgHeight + 15, 5);
    mainMenuCtx.fillStyle = '#000';
    mainMenuCtx.fillText(roster[i].cost, x + 25 ,y + rosterImgHeight + 20);
    roster[i].x = x;
    roster[i].y = y;
    //console.log('roster[i]', roster[i]);
    x = (x + rosterImgWidth + 15);
    if(i === 2 || i === 5 || i === 8 || i === 11) {
      x = 60;
      y += rosterImgHeight + 45;
    }
    i++;
    displayRosterUnits(i, x, y);
  });
}

const drawCoin = (centerX:number, centerY:number, radius:number) => {
  mainMenuCtx.beginPath();
  mainMenuCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  mainMenuCtx.fillStyle = '#ffd700';
  mainMenuCtx.fill();
}
