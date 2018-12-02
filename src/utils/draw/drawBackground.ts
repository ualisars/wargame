import {backgroundCtx} from '../../config/context';
import {loadImage} from '..';
import {MAP_WIDTH, MAP_HEIGHT} from '../../config';

export const drawBackground = (src:string) => {
  loadImage(src, (err:any, img:any) => {
    backgroundCtx.drawImage(img, 0, 0, MAP_WIDTH, MAP_HEIGHT);
  });
}
