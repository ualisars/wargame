// load image
export const loadImage = (imgPath: string, callback:any) => {
  let img = new Image;
  img.onload = () => {
    callback(null, img);
  }
  img.onerror = () => {
    let msg = 'Cannot load the image at ' + imgPath;
    callback(new Error(msg));
  }
  img.src = imgPath;
}
