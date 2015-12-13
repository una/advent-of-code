var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf8');

// starts by giving gift at (0,0)
var uniqueHouses = { '0,0': 1 };
var x = 0, y = 0;

for (var i = 0; i < input.length; i++) {

  // what is the move direction?
  switch (input[i]) {
    case '<':
      y--;
      break;
    case '>':
      y++;
      break;
    case '^':
      x++;
      break;
    case 'v':
      x--;
      break;
  }

  // for each move, record the grid location:
  gridLocation = x + ',' + y;

  // add specific location to an object of all of the locations if it doesnt exist yet (means it is a unique location):
  if (!uniqueHouses[gridLocation]) {
    uniqueHouses[gridLocation] = 1;
  }
}

console.log(Object.keys(uniqueHouses).length);