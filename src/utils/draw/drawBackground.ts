import {backgroundCtx} from '../../config/context';
import {loadImage} from '..';
import {WIDTH, HEIGHT} from '../../config';

export const drawBackground = (src:string) => {
  loadImage(src, (err:any, img:any) => {
    backgroundCtx.drawImage(img, 0, 0, WIDTH, HEIGHT);
  });
}
