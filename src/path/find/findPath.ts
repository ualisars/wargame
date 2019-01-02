export const findPathFromOneNodeToAnother = (startX:number, startY:number, finishX:number, finishY:number) => {
// naiveLineDrawingAlgorithm
// algorithm:
//   dx = x2 - x1
//   dy = y2 - y1
//   for x from x1 to x2 {
//    y = y1 + dy * (x - x1) / dx
//    plot(x, y)
// }
  let dx = finishX - startX;
  let dy = finishY - startY;
  let x1 = startX;
  let x2 = finishX;
  let y1 = startY;
  let y2 = finishY;
  let path = [];
  if(x1 === x2 && y1 === y2) {
    path.push({x: x1, y : y1});
    return path;
  }
  if(x1 <= x2) {
    if(Math.abs(dx) >= Math.abs(dy)) {
      if(y1 > y2) {
        for(let x = x1; x <= x2; ++x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
      if(y1 <= y2) {
        for(let x = x1; x <= x2; ++x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
    }
    if(Math.abs(dx) < Math.abs(dy)) {
      if(y1 > y2) {
        for(let y = y1; y >= y2; --y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
        }
      }
      if(y1 <= y2) {
        for(let y = y1; y <= y2; ++y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
        }
      }
    }
  }
  if(x1 > x2) {
    if(Math.abs(dx) >= Math.abs(dy)) {
      if(y1 > y2) {
        for(let x = x1; x >= x2; --x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
      if(y1 <= y2) {
        for(let x = x1; x >= x2; --x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
    }
    if(Math.abs(dx) < Math.abs(dy)) {
      if(y1 > y2) {
        for(let y = y1; y >= y2; --y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
        }
      }
      if(y1 <= y2) {
        for(let y = y1; y <= y2; ++y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
        }
      }
    }
  }
  return path;
}
