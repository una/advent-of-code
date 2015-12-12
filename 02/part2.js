var fs = require("fs");
var input = fs.readFileSync("./input.txt", "utf8");

var lines = input.split('\n');
var allOfTheRibbon = 0;

for(var i = 0;i < lines.length;i++){
  var vals = lines[i].split('x');

  // set vars
  var l = 0,
      w = 0,
      h = 0,
      bowLength = 0,
      wrapLength = 0,
      totalLength = 0;

  // values
  l = parseInt(vals[0]);
  w = parseInt(vals[1]);
  h = parseInt(vals[2]);

  //ribbon bow is l * w * h
  bowLength = l*w*h;

  // array of values:
  var valArr = [l, w, h];

  // get largest value and remove it from the array
  var largest = Math.max.apply(Math, valArr);
  var indexOfLargest = valArr.indexOf(largest);
  if (indexOfLargest >= 0) {
    valArr.splice( indexOfLargest, 1 );
  }

  wrapLength = valArr[0]*2 + valArr[1]*2;

  totalLength = wrapLength+bowLength;

  allOfTheRibbon += totalLength;

  console.log(totalLength, allOfTheRibbon);
}