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
  console.log('dx', dx);
  console.log('dy', dy);
  console.error('x1:', x1, 'x2:', x2);
  console.error('y1:', y1, 'y2:', y2);
  if(x1 === x2 && y1 === y2) {
    path.push({x: x1, y : y1});
    return path;
  }
  if(x1 <= x2) {
    console.log('x1 <= x2');
    if(Math.abs(dx) >= Math.abs(dy)) {
      console.log('dx > dy')
      if(y1 > y2) {
        console.log('y1 > y2')
        for(let x = x1; x <= x2; ++x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
      if(y1 <= y2) { // work
        console.log('y1 <= y2')
        for(let x = x1; x <= x2; ++x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
    }
    if(Math.abs(dx) < Math.abs(dy)) {
      console.log('dx < dy');
      if(y1 > y2) {
        console.log('y1 > y2'); // work
        for(let y = y1; y >= y2; --y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
        }
      }
      if(y1 <= y2) {
        console.log('y1 <= y2')
        for(let y = y1; y <= y2; ++y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
          //console.log('x:', x, 'y:', y);
        }
      }
    }
  } // end if x1 < x2
  ///////////////////
  ///////////////////
  if(x1 > x2) {
    console.log('x1 > x2');
    if(Math.abs(dx) >= Math.abs(dy)) {
      console.log('dx >= dy');
      if(y1 > y2) {
        console.log('y1 > y2');
        for(let x = x1; x >= x2; --x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
        }
      }
      if(y1 <= y2) {
        console.log('y1 <= y2');
        for(let x = x1; x >= x2; --x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          path.push({x, y});
          // console.log('x:', x, 'y:', y);
        }
      }
    }
    if(Math.abs(dx) < Math.abs(dy)) {
      console.log('dy > dx');
      if(y1 > y2) {
        console.log('y1 > y2');
        for(let y = y1; y >= y2; --y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          path.push({x, y});
        }
      }
      console.log('y1 <= y2'); // not work
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
