var fs = require("fs");
var input = fs.readFileSync("./input.txt", "utf8");

// both start by giving gift at (0,0)
var masterHomesObj = { '0,0': 1 };
var x = 0, y = 0;
var a = 0, b = 0;

for (var i = 0; i < input.length; i++) {

  // only the normal santa moves:
  if (i%2 == 0) {
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
    normalSanta = x + ',' + y;

    if (!masterHomesObj[normalSanta]) {
      masterHomesObj[normalSanta] = 1;
    }
  }

  // robo santa coords
  else {
    switch (input[i]) {
      case '<':
        b--;
        break;
      case '>':
        b++;
        break;
      case '^':
        a++;
        break;
      case 'v':
        a--;
        break;
    }

    // for each move, record the grid location:
    roboSanta = a + ',' + b;

    if (!masterHomesObj[roboSanta]) {
      masterHomesObj[roboSanta] = 1;
    }
  }

}

console.log(Object.keys(masterHomesObj).length);

// NEED TO CHECK MASTER LIST OF LOCATIONS