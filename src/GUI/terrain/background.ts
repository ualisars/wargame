import {backgroundCtx, terrainCtx} from '../../map/mapConfig';
import {loadImage} from '../../utils';
import {WIDTH, HEIGHT} from '../../config';

export const drawBackground = (src:string) => {
  loadImage(src, (err:any, img:any) => {
    backgroundCtx.drawImage(img, 0, 0, WIDTH, HEIGHT);
  });
}

export const drawObstacle = (x:number, y:number, width:number, height:number, src:string) => {
  loadImage(src, (err:any, img:any) => {
    terrainCtx.drawImage(img, x, y, width, height);
  });
}
