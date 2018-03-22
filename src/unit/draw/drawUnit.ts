import {ctx} from '../../config/context';
import {loadImage} from '../../utils';

export const drawUnitImage = (x:number, y:number, width:number, height:number, src:string) => {
  loadImage(src, (err:any, img:any) => {
    ctx.drawImage(img, x, y, width, height);
  });
}

export const drawUnit = (unit:any) => {
  let color;
  if(unit.controlBy === 'player') {
    color = '#dbdb0d';
  }
  else if(unit.controlBy === 'computer') {
    color = '#d30c0c';
    if(!unit.isVisible) {
      return; // unit not visible;
    }
  }
  if(ctx) {
    ctx.beginPath();
    ctx.arc(unit.centerX, unit.centerY, unit.radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export const redrawUnits = (units:any[]) => {
  for(let unit of units) {
    if(unit.isMoving !== true) {
      drawUnit(unit);
    }
  }
}
