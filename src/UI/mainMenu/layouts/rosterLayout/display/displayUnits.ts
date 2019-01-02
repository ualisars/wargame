import {mainMenuCtx} from '../../../../../config/context';
import {
  unitRosterWidth,
  unitRosterHeight,
  titleHeight
} from '../../../../../config/mainMenu';
import {roster} from '../../../../../store/roster/roster';
import {loadImage} from '../../../../../utils';
import {
  rosterImgHeight,
  rosterImgWidth
} from '../rosterSettings';
import {drawCoin} from '../coin';


export const displayRosterUnits = (i:number = 0, x:number=60, y:number=titleHeight+60) => {
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
    x = (x + rosterImgWidth + 15);
    if(i === 2 || i === 5 || i === 8 || i === 11) {
      x = 60;
      y += rosterImgHeight + 45;
    }
    i++;
    displayRosterUnits(i, x, y);
  });
}
