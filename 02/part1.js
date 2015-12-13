var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf8');

// set vars
var l = 0,
    w = 0,
    h = 0,
    slack = 0,
    totalWrap = 0;

// formula for total size
function totalSize(l,w,h,slack) {
  return (2*l*w + 2*w*h + 2*h*l + slack);
}

var lines = input.split('\n');

for(var i = 0;i < lines.length;i++){
  var vals = lines[i].split('x');

  // values
  l = parseInt(vals[0]);
  w = parseInt(vals[1]);
  h = parseInt(vals[2]);

  // array of values:
  var valArr = [l, w, h];

  // get largest value and remove it from the array
  var largest = Math.max.apply(Math, valArr);
  var indexOfLargest = valArr.indexOf(largest);
  if (indexOfLargest >= 0) {
    valArr.splice( indexOfLargest, 1 );
  }

  // slack area is the remaining numbers multiplied
  slack = eval(valArr.join('*'));

  // all of the wrapping paper gets added:
  totalWrap += totalSize(l,w,h,slack);

  console.log(totalWrap);
}