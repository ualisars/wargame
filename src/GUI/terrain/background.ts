import {backgroundCtx, ctx} from '../../map/mapConfig';
import {loadImage} from '../../utils/loadImage';
import {WIDTH, HEIGHT} from '../../map/mapSettings';

export const drawBackground = (src:string) => {
  loadImage(src, (err:any, img:any) => {
    backgroundCtx.drawImage(img, 0, 0, WIDTH, HEIGHT);
  });
}
